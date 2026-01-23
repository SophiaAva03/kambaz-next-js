import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
        <input placeholder="Search for Assignments"
                id="wd-search-assignment" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
            ASSIGNMENTS 40% of Total <button>+</button> 
        </h3>
        <ul id="wd-assignment-list">
            <li className="wd-assignment-list-item">
                <Link href="/courses/1234/assignments/123"
                    className="wd-assignment-link" >
                    A1 - ENV + HTML
                </Link> 
                <p>
                    Multiple Modules | <strong>Not available until:</strong> May 6 at 12:00am | 
                    <strong> Due: </strong> May 13 at 11:59pm | 100 pts
                </p>
            </li>
            <li className="wd-assignment-list-item">
                <Link href="/courses/1234/assignments/123"
                    className="wd-assignment-link" >
                    A2 - CSS + Bootstrap
                </Link> 
                <p>
                    Multiple Modules | <strong>Not available until:</strong> May 13 at 12:00am | 
                    <strong> Due: </strong> May 20 at 11:59pm | 100 pts
                </p>
            </li>
            <li className="wd-assignment-list-item">
                <Link href="/courses/1234/assignments/123"
                    className="wd-assignment-link" >
                    A3 - JAVASCRIPT + REACT
                </Link> 
                <p>
                    Multiple Modules | <strong>Not available until:</strong> May 20 at 12:00am | 
                    <strong> Due: </strong> May 27 at 11:59pm | 100 pts
                </p>
            </li>
        </ul>
        <h3 id="wd-quizzes-title">
            QUIZZES 10% of Total <button>+</button> 
        </h3>
        <ul id="wd-quizzes-list">
            <li className="wd-quizzes-list-item">
                <Link href="/courses/1234/quizzes/123"
                    className="wd-quizzes-link" >
                    Q1 - HTML
                </Link> 
                <p>
                    <strong>Available until:</strong> May 20 at 12:00am | 
                    <strong> Due: </strong> May 27 at 11:59pm | 10 pts | 10 questions
                </p>
            </li>
            <li className="wd-quizzes-list-item">
                <Link href="/courses/1234/quizzes/123"
                    className="wd-quizzes-link" >
                    Q2 - CSS
                </Link> 
                <p>
                    <strong>Not available until:</strong> May 21 at 12:00am | 
                    <strong> Due: </strong> May 30 at 11:59pm | 15 pts | 15 questions
                </p>
            </li>
        </ul>
        <h3 id="wd-exams-title">
            EXAMS 20% of Total <button>+</button> 
        </h3>
        <ul id="wd-exams-list">
            <li className="wd-exams-list-item">
                <Link href="/courses/1234/exams/123"
                    className="wd-exams-link" >
                    X1
                </Link> 
                <p>
                    <strong>Not available until:</strong> Feb 24 at 12:00am | 
                    <strong> Due: </strong> Mar 3 at 11:59pm | 80 pts | 13 questions
                </p>
            </li>
            <li className="wd-exams-list-item">
                <Link href="/courses/1234/exams/123"
                    className="wd-exams-link" >
                    X2
                </Link> 
                <p>
                    <strong>Not available until:</strong> Apr 21 at 12:00am | 
                    <strong> Due: </strong> Apr 28 at 11:59pm | 90 pts | 15 questions
                </p>
            </li>
        </ul>
        <h3 id="wd-project-title">
            PROJECT 30% of Total <button>+</button> 
        </h3>
        <ul id="wd-project-list">
            <li className="wd-project-list-item">
                <Link href="/courses/1234/project/123"
                    className="wd-project-link" >
                    Project - Kambaz Quizzes Page
                </Link> 
                <p> 
                    <strong> Due: </strong> Apr 19 at 11:59pm | 315 pts
                </p>
            </li>
        </ul>
    </div>
);}

// to do:
// project section