
"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { setAssignments, deleteAssignment } from "./reducer";
import * as client from "./client";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentHeadingButtons from "./AssignmentHeadingButtons";
import AssignmentElement from "./AssignmentElement";

export default function Assignments() {
  const { cid } = useParams();
  const courseId = cid as string;
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);

  const fetchAssignments = async () => {
    const data = await client.findAssignmentsForCourse(courseId);
    dispatch(setAssignments(data));
  };

  const onAddAssignment = async () => {
    const newAssignment = await client.createAssignment(courseId, {
      title: "New Assignment", description: "", points: 100,
      available: "", due: "", course: courseId,
    });
    dispatch(setAssignments([...assignments, newAssignment]));
    router.push(`/courses/${courseId}/assignments/${newAssignment._id}`);
  };

  const onDeleteAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div id="wd-assignments">
      <AssignmentsControls onAddAssignment={onAddAssignment} /><br /><br />
      <ListGroup className="rounded-0" id="wd-assignment-page">
        <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex fw-bold">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <AssignmentHeadingButtons percent={40} />
          </div>
          <ListGroup className="wd-assignment-list rounded-0">
            {assignments
              .filter((a: any) => a.course === courseId)
              .map((assignment: any) => (
                <AssignmentElement
                  key={assignment._id}
                  link={`/courses/${courseId}/assignments/${assignment._id}`}
                  name={assignment.title}
                  available={assignment.available}
                  due={assignment.due}
                  points={assignment.points}
                  onDelete={() => onDeleteAssignment(assignment._id)}
                />
              ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}