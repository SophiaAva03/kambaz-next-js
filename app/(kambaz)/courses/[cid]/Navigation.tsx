"use client"

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

export default function CourseNavigation() {
  const pathname = usePathname();
  const params = useParams(); // Get dynamic courseId from the route
  const courseId = params.cid; // Assuming your route is /courses/[courseId]/...

  const links = [
    { label: "Home", path: "home" },
    { label: "Modules", path: "modules" },
    { label: "Piazza", path: "piazza" },
    { label: "Zoom", path: "zoom" },
    { label: "Assignments", path: "assignments" },
    { label: "Quizzes", path: "quizzes" },
    { label: "Grades", path: "grades" },
    { label: "People", path: "people/table" }
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const href = `/courses/${courseId}/${link.path}`;
        const isActive = pathname === href;

        return (
          <Link
            key={link.label}
            href={href}
            id={`wd-course-${link.label.toLowerCase()}-link`}
            className={`list-group-item ${isActive ? "active border-0" : "text-danger border-0"}`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
