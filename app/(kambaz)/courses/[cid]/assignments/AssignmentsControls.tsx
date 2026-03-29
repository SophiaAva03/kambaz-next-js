import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

type Props = {
  onAddAssignment: () => void;
};

export default function AssignmentsControls({ onAddAssignment }: Props) {
  return (
    <div id="wd-assignments-controls" className="d-flex align-items-center text-nowrap">
      <div className="input-group w-25">
        <span className="input-group-text bg-white">
          <FaSearch />
        </span>
        <input type="search" className="form-control border-start-0" placeholder="Search..." />
      </div>
      <div className="ms-auto">
        <Button variant="secondary" size="lg" className="me-1">
          <FaPlus className="me-2" />
          Group
        </Button>
        <Button variant="danger" size="lg" onClick={onAddAssignment}>
          <FaPlus className="me-2" />
          Assignment
        </Button>
      </div>
    </div>
  );
}