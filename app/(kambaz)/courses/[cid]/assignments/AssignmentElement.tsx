import ListGroupItem from "react-bootstrap/ListGroupItem";
import { MdOutlineAssignment } from "react-icons/md";
import { BsGripVertical } from "react-icons/bs";
import Link from "next/link";
import AssignmentInfo from "./AssignmentInfo";
import AssignmentControlButtons from "./AssignmentControlButtons";

type MakeAssignmentProps = {
  link: string;
  name: string;
  available: string;
  due: string;
  points: number;
  onDelete: () => void;
};

export default function AssignmentElement({
  link,
  name,
  available,
  due,
  points,
  onDelete,
}: MakeAssignmentProps) {
  return (
    <ListGroupItem className="wd-assignment p-3 ps-1 d-flex align-items-start">
      <div className="me-2 d-flex flex-column align-items-center">
        <BsGripVertical className="fs-3 mb-2" />
      </div>
      <div className="me-2 d-flex flex-column align-items-center">
        <MdOutlineAssignment className="fs-3 text-success" />
      </div>
      <div className="d-flex flex-column">
        <Link href={link}
          className="wd-assignment-link text-dark text-decoration-none fw-bold mb-1">
          {name}
        </Link>
        <AssignmentInfo available={available} due={due} points={points} />
      </div>
      <div className="ms-auto">
        <AssignmentControlButtons onDelete={onDelete} />
      </div>
    </ListGroupItem>
  );
}