"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";
import { useParams, useRouter } from "next/navigation";
import * as client from "../client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const courseId = cid as string;
  const assignmentId = aid as string;
  const router = useRouter();

  const [assignment, setAssignment] = useState<any>({
    title: "New Assignment",
    description: "",
    points: 100,
    group: "ASSIGNMENTS",
    gradeDisplay: "FRACTION",
    submissionType: "ONLINE",
    available: "",
    due: "",
    course: courseId,
  });

  useEffect(() => {
    const fetchAssignment = async () => {
      if (assignmentId === "new") return;
      const assignments = await client.findAssignmentsForCourse(courseId);
      const found = assignments.find((a: any) => a._id === assignmentId);
      if (found) setAssignment(found);
    };
    fetchAssignment();
  }, []);

  const handleSave = async () => {
    if (assignmentId === "new") {
      await client.createAssignment(courseId, assignment);
    } else {
      await client.updateAssignment(assignment);
    }
    router.push(`/courses/${courseId}/assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-4">
      <Form>
        <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
        <Form.Control id="wd-name" value={assignment.title} className="mb-3 w-50"
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />

        <Form.Label htmlFor="wd-description">Description</Form.Label>
        <Form.Control as="textarea" id="wd-description" value={assignment.description}
          rows={10} className="mb-3 w-50"
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} />

        <div className="d-flex align-items-center mb-3">
          <Form.Label htmlFor="wd-points" className="me-3">Points</Form.Label>
          <Form.Control id="wd-points" type="number" value={assignment.points}
            className="mb-3 w-25"
            onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })} />
        </div>

        <div className="mb-3 w-25">
          <Form.Label htmlFor="wd-assignment-group">Assignment Group</Form.Label>
          <Form.Select id="wd-assignment-group" value={assignment.group}
            onChange={(e) => setAssignment({ ...assignment, group: e.target.value })}>
            <option value="ASSIGNMENTS">Assignments</option>
            <option value="QUIZZES">Quizzes</option>
            <option value="EXAMS">Exams</option>
            <option value="PROJECTS">Projects</option>
          </Form.Select>
        </div>

        <div className="mb-3 w-25">
          <Form.Label htmlFor="wd-display-grade-as">Display Grade as</Form.Label>
          <Form.Select id="wd-display-grade-as" value={assignment.gradeDisplay}
            onChange={(e) => setAssignment({ ...assignment, gradeDisplay: e.target.value })}>
            <option value="PERCENTAGE">Percentage</option>
            <option value="FRACTION">Fraction</option>
          </Form.Select>
        </div>

        <div className="w-50">
          <Form.Label htmlFor="wd-submission-type">Submission Type</Form.Label>
          <div className="border rounded border-2 p-3">
            <Form.Select id="wd-submission-type" className="mb-3 w-100" value={assignment.submissionType}
              onChange={(e) => setAssignment({ ...assignment, submissionType: e.target.value })}>
              <option value="ONLINE">Online</option>
              <option value="OFFLINE">Offline</option>
              <option value="EXTERNAL">External</option>
            </Form.Select>
            <Form.Label>Online Entry Options</Form.Label>
            <Form.Check type="checkbox" id="wd-chkbox-text-entry" label="Text Entry" />
            <Form.Check type="checkbox" id="wd-chkbox-website-url" label="Website URL" />
            <Form.Check type="checkbox" id="wd-chkbox-media-recordings" label="Media Recordings" />
            <Form.Check type="checkbox" id="wd-chkbox-student-annotation" label="Student Annotation" />
            <Form.Check type="checkbox" id="wd-chkbox-file-uploads" label="File Uploads" className="mb-3" />
          </div>
        </div>
        <br />

        <div className="border rounded border-2 p-3 w-25">
          <Form.Label htmlFor="wd-assign-to">Assign to</Form.Label>
          <Form.Control id="wd-assign-to" defaultValue="Everyone" className="mb-3 w-100" />
          <Form.Label htmlFor="wd-available-date">Available From</Form.Label>
          <Form.Control type="date" id="wd-available-date" value={assignment.available}
            onChange={(e) => setAssignment({ ...assignment, available: e.target.value })} />
          <br />
          <Form.Label htmlFor="wd-due-date">Due</Form.Label>
          <Form.Control type="date" id="wd-due-date" value={assignment.due}
            onChange={(e) => setAssignment({ ...assignment, due: e.target.value })} />
        </div>

        <div className="mt-4">
          <Link href={`/courses/${courseId}/assignments`} passHref>
            <Button variant="secondary" className="me-2">Cancel</Button>
          </Link>
          <Button variant="danger" onClick={handleSave}>Save</Button>
        </div>
      </Form>
    </div>
  );
}