import ListGroupItem from "react-bootstrap/ListGroupItem";
import { MdOutlineQuiz } from "react-icons/md";
import { BsGripVertical } from "react-icons/bs";
import Link from "next/link";
import AssignmentControlButtons from "./AssignmentControlButtons";
import QuizInfo from "./QuizInfo";

type MakeQuizProps = {
  link: string;
  name: string;
  available: string;
  due: string;
  points: number;
  questions: number;
};

export default function QuizElement({
    link, 
    name,
    available,
    due,
    points,
    questions,
}: MakeQuizProps) {
    return (
        <ListGroupItem className="wd-quiz p-3 ps-1 d-flex align-items-start">
            <div className="me-2 d-flex flex-column align-items-center">
                <BsGripVertical className="fs-3 mb-2" /> 
            </div>
            <div className="me-2 d-flex flex-column align-items-center">
                <MdOutlineQuiz className="fs-3 text-success" />
            </div>
            <div className="d-flex flex-column">
                <Link 
                href={link}
                className="wd-quiz-link text-dark text-decoration-none fw-bold mb-1"
                >
                {name}
                </Link>
                <QuizInfo
                    available={available}
                    due={due}
                    points={points}
                    questions={questions}
                />
            </div>
            <div className="ms-auto">
                <AssignmentControlButtons />
            </div>
        </ListGroupItem>
    );
}