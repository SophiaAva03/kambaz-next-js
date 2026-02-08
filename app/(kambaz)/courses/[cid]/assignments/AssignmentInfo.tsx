type AssignmentInfoProps = {
  available: string;
  due: string;
  points: number;
};

export default function AssignmentInfo({
  available,
  due,
  points,
}: AssignmentInfoProps) {
    return (
        <div className="d-flex flex-wrap gap-2 text-muted wd-assignment-info">
            <span className="fw-bold text-danger">Multiple Modules</span>
            <span>|</span>
            <span className="fw-bold">Not available until:</span>
            <span>{available}</span>
            <span>|</span>
            <span className="fw-bold">Due:</span>
            <span>{due}</span>
            <span>|</span>
            <span>{points} pts</span>
        </div>
    );
}