import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle, FaCircle, FaTrash } from "react-icons/fa";

type Props = {
  onDelete: () => void;
};

export default function AssignmentControlButtons({ onDelete }: Props) {
  return (
    <div className="float-end">
      <span className="me-1 position-relative">
        <FaCheckCircle style={{ top: "2px" }} className="text-success me-1 position-absolute fs-5" />
        <FaCircle className="text-white me-1 fs-6" />
      </span>
      <FaTrash className="text-danger me-2 fs-5" onClick={onDelete} style={{ cursor: "pointer" }} />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}