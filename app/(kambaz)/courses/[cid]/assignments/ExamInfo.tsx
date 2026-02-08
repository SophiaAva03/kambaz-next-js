type ExamInfoProps = {
  available: string;
  due: string;
  points: number;
  questions: number;
};

export default function ExamInfo({
  available,
  due,
  points,
  questions,
}: ExamInfoProps) {
    return (
        <div className="d-flex flex-wrap gap-2 text-muted wd-assignment-info">
            <span className="fw-bold">Not available until:</span>
            <span>{available}</span>
            <span>|</span>
            <span className="fw-bold">Due:</span>
            <span>{due}</span>
            <span>|</span>
            <span>{points} pts</span>
            <span>|</span>
            <span>{questions} questions</span>
        </div>
    );
}