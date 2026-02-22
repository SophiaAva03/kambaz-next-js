"use client"

import Link from "next/link";
import { Form, Button } from "react-bootstrap";
import { useParams } from "next/navigation";
import { assignments } from "../../../../database";

export default function AssignmentEditor() {
    const params = useParams();
    const { cid, aid } = params; 

    const assignment = assignments.find(
        a => a._id === aid && a.course === cid
    );

    if (!assignment) {
        return <div className="p-4 text-danger">Assignment not found for course {cid}</div>;
    }

    return (
        <div id="wd-assignments-editor" className="p-4">
            <Form>
                <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
                <Form.Control id="wd-name" defaultValue={assignment.title || "New Assignment"} className="mb-3 w-50" />

                <Form.Label htmlFor="wd-description">Description</Form.Label>
                <Form.Control
                    as="textarea"
                    id="wd-description"
                    defaultValue={assignment.description || ""}
                    rows={10}
                    className="mb-3 w-50"
                />

                <div className="d-flex align-items-center mb-3">
                    <Form.Label htmlFor="wd-points" className="me-3">Points</Form.Label>
                    <Form.Control
                        id="wd-points"
                        type="number"
                        defaultValue={assignment.points || 100}
                        className="mb-3 w-25"
                    />
                </div>

                <div className="mb-3 w-25">
                    <Form.Label htmlFor="wd-assignment-group">Assignment Group</Form.Label>
                    <Form.Select
                        id="wd-assignment-group"
                        defaultValue={assignment.group || "ASSIGNMENTS"}
                        >
                        <option value="ASSIGNMENTS">Assignments</option>
                        <option value="QUIZZES">Quizzes</option>
                        <option value="EXAMS">Exams</option>
                        <option value="PROJECTS">Projects</option>
                    </Form.Select>
                </div>

                <div className="mb-3 w-25">
                    <Form.Label htmlFor="wd-display-grade-as" className="me-3">Display Grade as</Form.Label>
                    <Form.Select id="wd-display-grade-as" className="mb-3" defaultValue={assignment.gradeDisplay || "FRACTION"}>
                        <option value="PERCENTAGE">Percentage</option>
                        <option value="FRACTION">Fraction</option>
                    </Form.Select>
                </div>

                <div className="w-50">
                    <Form.Label htmlFor="wd-submission-type" className="me-3">Submission Type</Form.Label>
                    <div className="border rounded border-2 p-3">
                        <Form.Select id="wd-submission-type" className="mb-3 w-100" defaultValue={assignment.submissionType || "ONLINE"}>
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
                    <Form.Label htmlFor="wd-assign-to" className="me-3">Assign to</Form.Label>
                    <Form.Control id="wd-assign-to" defaultValue="Everyone" className="mb-3 w-100" />
                    <div>
                        <Form.Label htmlFor="wd-available-date">Available From</Form.Label>
                        <Form.Control
                            type="date"
                            id="wd-available-date"
                            defaultValue={assignment.available || "2000-01-21"}
                        />
                    </div>
                    <br />
                    <div>
                        <Form.Label htmlFor="wd-due-date">Due</Form.Label>
                        <Form.Control
                            type="date"
                            id="wd-due-date"
                            defaultValue={assignment.due || "2000-01-21"}
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <Link href={`/courses/${cid}/assignments`} passHref>
                        <Button variant="secondary" className="me-2">Cancel</Button>
                    </Link>
                    <Link href={`/courses/${cid}/assignments`} passHref>
                        <Button variant="danger">Save</Button>
                    </Link>
                </div>
            </Form>
        </div>
    );
}