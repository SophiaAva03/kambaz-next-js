import Link from "next/link";
import AssignmentsControls from "./AssignmentsControls";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { BsGripVertical } from "react-icons/bs";
import AssignmentHeadingButtons from "./AssignmentHeadingButtons";
import AssignmentElement from "./AssignmentElement";
import QuizElement from "./QuizElement";
import ExamElement from "./ExamElement";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { PiProjectorScreenChart } from "react-icons/pi";


export default function Assignments() {
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
                    <AssignmentElement 
                        link="/courses/1234/assignments/123"
                        name="A1 - ENV + HTML"
                        available="May 6 at 12:00am"
                        due="May 13 at 11:59pm"
                        points={100}
                    />
                    <AssignmentElement 
                        link="/courses/1234/assignments/123"
                        name="A2 - CSS + Bootstrap"
                        available="May 13 at 12:00am"
                        due="May 20 at 11:59pm"
                        points={100}
                    />
                    <AssignmentElement 
                        link="/courses/1234/assignments/123"
                        name="A3 - JAVASCRIPT + REACT"
                        available="May 20 at 12:00am"
                        due="May 27 at 11:59pm"
                        points={100}
                    />
                </ListGroup>
            </ListGroupItem>
            <ListGroupItem className="wd-quizzes p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary d-flex fw-bold"> 
                    <BsGripVertical className="me-2 fs-3" /> 
                    QUIZZES
                    <AssignmentHeadingButtons percent={10}/>
                </div>
                <ListGroup className="wd-quizzes-list rounded-0">
                    <QuizElement 
                        link="/courses/1234/quizzes/123"
                        name="Q1 - HTML"
                        available="May 20 at 12:00am"
                        due="May 27 at 11:59pm"
                        points={10}
                        questions={10}
                    />
                    <QuizElement 
                        link="/courses/1234/quizzes/123"
                        name="Q2 - CSS"
                        available="May 21 at 12:00am"
                        due="May 30 at 11:59pm"
                        points={20}
                        questions={15}
                    />
                </ListGroup>
            </ListGroupItem>
            <ListGroupItem className="wd-exams p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary d-flex fw-bold"> 
                    <BsGripVertical className="me-2 fs-3" /> 
                    EXAMS
                    <AssignmentHeadingButtons percent={20}/>
                </div>
                <ExamElement 
                    link="/courses/1234/exams/123"
                    name="X1"
                    available="Feb 24 at 12:00am"
                    due="Mar 3 at 11:59pm"
                    points={80}
                    questions={13}
                />
                <ExamElement 
                    link="/courses/1234/exams/123"
                    name="X2"
                    available="Apr 21 at 12:00am"
                    due="Apr 28 at 11:59pm"
                    points={90}
                    questions={15}
                />
            </ListGroupItem>
            <ListGroupItem className="wd-project p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary d-flex fw-bold"> 
                    <BsGripVertical className="me-2 fs-3" /> 
                    PROJECT
                    <AssignmentHeadingButtons percent={30}/>
                </div>
                <ListGroupItem className="wd-exam p-3 ps-1 d-flex align-items-start">
                    <div className="me-2 d-flex flex-column align-items-center">
                        <BsGripVertical className="fs-3 mb-2" /> 
                    </div>
                    <div className="me-2 d-flex flex-column align-items-center">
                        <PiProjectorScreenChart className="fs-3 text-success" />
                    </div>
                    <div className="d-flex flex-column">
                        <Link 
                        href="/courses/1234/project/123"
                        className="wd-quiz-link text-dark text-decoration-none fw-bold mb-1"
                        >
                        KAMBAZ
                        </Link>

                        <div className="d-flex flex-wrap gap-2 text-muted wd-assignment-info">
                            <span className="fw-bold">Due:</span>
                            <span>Apr 19 at 11:59pm</span>
                            <span>|</span>
                            <span>315 pts</span>
                        </div>
                        
                    </div>
                    <div className="ms-auto">
                        <AssignmentControlButtons />
                    </div>
                </ListGroupItem>
            </ListGroupItem>
        </ListGroup>
    </div>
);}