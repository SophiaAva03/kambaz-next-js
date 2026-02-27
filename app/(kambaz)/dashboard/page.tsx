"use client"

/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../courses/reducer";
import { RootState } from "../store";
import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import CardBody from "react-bootstrap/CardBody";
import CardTitle from "react-bootstrap/CardTitle";
import CardText from "react-bootstrap/CardText";
import Button from "react-bootstrap/Button";
import * as db from "../database";
import { v4 as uuidv4 } from "uuid";
import { FormControl } from "react-bootstrap";

export default function Dashboard() {
    const { courses } = useSelector((state: RootState) => state.coursesReducer);
    const dispatch = useDispatch();

    const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg", description: "New Description"
    });

    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const { enrollments } = db;

    console.log("currentUser", currentUser);
    console.log("enrollments", enrollments);

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h5>New Course
                <Button className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={() => dispatch(addNewCourse(course))} > Add </Button>
                <Button className="btn btn-warning float-end me-2"
                    onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
                    Update </Button>
            </h5>
            <br />
            <FormControl value={course.name} className="mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <FormControl
                as="textarea"
                rows={3}
                value={course.description}
                onChange={(e) => setCourse({ ...course, description: e.target.value }) }
            />
            <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses">
                {currentUser && (<Row xs={1} md={5} className="g-4">
                    {courses
                    .filter((course) =>
                    enrollments.some(
                        (enrollment) =>
                        enrollment.user === currentUser._id &&
                        enrollment.course === course._id
                        ))
                    .map((course) => (
                        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card>
                                <Link href={`/courses/${course._id}/home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                                    <CardImg src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                                    <CardBody className="card-body">
                                        <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                        {course.name} </CardTitle>
                                        <CardText className="wd-dashboard-course-description overflow-hidden" style={{height:"100px"}}>
                                        {course.description} </CardText>
                                        <Button variant="primary"> Go </Button>
                                        <Button onClick={(event) => {
                                                event.preventDefault();
                                                dispatch(deleteCourse(course._id));
                                                }} className="btn btn-danger float-end"
                                                id="wd-delete-course-click">
                                                Delete
                                        </Button>
                                        <Button id="wd-edit-course-click"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                            }}
                                            className="btn btn-warning me-2 float-end" >
                                            Edit
                                        </Button>
                                    </CardBody>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>)}
            </div>
        </div>
    );
}
