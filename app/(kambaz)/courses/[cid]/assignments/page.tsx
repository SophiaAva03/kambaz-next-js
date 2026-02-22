"use client";

import { useParams } from "next/navigation";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { BsGripVertical } from "react-icons/bs";

import AssignmentsControls from "./AssignmentsControls";
import AssignmentHeadingButtons from "./AssignmentHeadingButtons";
import AssignmentElement from "./AssignmentElement";

import { assignments } from "../../../database"; // imports from index.ts

export default function Assignments() {
  const params = useParams();
  const courseId = params.cid; // ensure your route is like /courses/[courseId]/assignments

  // Filter assignments for the selected course
  const courseAssignments = assignments.filter(a => a.course === courseId);

  return (
    <div id="wd-assignments">
      <AssignmentsControls /><br /><br /><br /><br />

      <ListGroup className="rounded-0" id="wd-assignment-page">
        <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex fw-bold"> 
            <BsGripVertical className="me-2 fs-3" /> 
            ASSIGNMENTS
            <AssignmentHeadingButtons percent={40}/>
          </div>
          <ListGroup className="wd-assignment-list rounded-0">
            {courseAssignments.map(assignment => (
              <AssignmentElement 
                key={assignment._id}
                link={`/courses/${courseId}/assignments/${assignment._id}`}
                name={assignment.title}
                available={assignment.available}
                due={assignment.due}
                points={assignment.points}
              />
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}