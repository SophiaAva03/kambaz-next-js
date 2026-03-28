"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse, updateCourse, setCourses } from "../courses/reducer";
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
import * as client from "../courses/client";
import { FormControl } from "react-bootstrap";

export default function Dashboard() {
    const { courses } = useSelector((state: RootState) => state.coursesReducer);
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const dispatch = useDispatch();

    const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg", description: "New Description"
    });

    const fetchCourses = async () => {
        try {
            const courses = await client.findMyCourses();
            dispatch(setCourses(courses));
        } catch (error) {
            console.error(error);
        }
    };

    const onAddNewCourse = async () => {
        const newCourse = await client.createCourse(course);
        dispatch(setCourses([...courses, newCourse]));
    };

    const onDeleteCourse = async (courseId: string) => {
        await client.deleteCourse(courseId);
        dispatch(setCourses(courses.filter((c) => c._id !== courseId)));
    };

    const onUpdateCourse = async () => {
        await client.updateCourse(course);
        dispatch(setCourses(courses.map((c) => {
            if (c._id === course._id) { return course; }
            else { return c; }
    })));};

    useEffect(() => {
        if (currentUser) {
            fetchCourses();
        }
    }, [currentUser]);

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h5>New Course
                <Button className="btn btn-primary float-end" id="wd-add-new-course-click"
                    onClick={onAddNewCourse}>Add</Button>
                <Button className="btn btn-warning float-end me-2" id="wd-update-course-click"
                    onClick={onUpdateCourse}>Update</Button>
            </h5>
            <br />
            <FormControl value={course.name} className="mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <FormControl as="textarea" rows={3} value={course.description}
                onChange={(e) => setCourse({ ...course, description: e.target.value })} />
            <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses">
                {currentUser && (
                    <Row xs={1} md={5} className="g-4">
                        {courses.map((course) => (
                            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                                <Card>
                                    <Link href={`/courses/${course._id}/home`}
                                        className="wd-dashboard-course-link text-decoration-none text-dark">
                                        <CardImg src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                                        <CardBody>
                                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                                {course.name}
                                            </CardTitle>
                                            <CardText className="wd-dashboard-course-description overflow-hidden"
                                                style={{ height: "100px" }}>
                                                {course.description}
                                            </CardText>
                                            <Button variant="primary">Go</Button>
                                            <Button onClick={(e) => { e.preventDefault(); onDeleteCourse(course._id); }}
                                                className="btn btn-danger float-end" id="wd-delete-course-click">
                                                Delete
                                            </Button>
                                            <Button id="wd-edit-course-click"
                                                onClick={(e) => { e.preventDefault(); setCourse(course); }}
                                                className="btn btn-warning me-2 float-end">
                                                Edit
                                            </Button>
                                        </CardBody>
                                    </Link>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </div>
        </div>
    );
}
