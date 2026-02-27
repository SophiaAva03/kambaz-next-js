"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactNode, useState } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { RootState } from "../../store";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const course = courses.find((course: any) => course._id === cid);

  const [showNav, setShowNav] = useState(true);

  return (
    <div id="wd-courses">
      <h2>
        <FaAlignJustify
          className="me-4 fs-4 mb-1"
          style={{ cursor: "pointer" }}
          onClick={() => setShowNav(!showNav)}
        />
        {course?.name}
      </h2>
      <hr />
      <div className="d-flex">
        {showNav && (
          <div>
            <CourseNavigation />
          </div>
        )}
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
