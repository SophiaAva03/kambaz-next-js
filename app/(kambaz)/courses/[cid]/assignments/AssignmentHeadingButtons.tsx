import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

type PercentProp = {
  percent: number; // hardcoded percent value
};

export default function AssignmentHeadingButtons({ percent }: PercentProp) {
    return (
        <div className="d-flex align-items-center gap-2 ms-auto">
            <p className="mb-0 px-2 rounded-pill border border-2 margin-30 border-white">
                {percent}% of Total
            </p>
            <FaPlus className="fs-4" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}