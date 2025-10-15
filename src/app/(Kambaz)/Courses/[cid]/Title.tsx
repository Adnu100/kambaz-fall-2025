"use client";

import { usePathname } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";
import * as db from "../../Database";

export default function Title() {
  const pathname = usePathname();
  const pathtree = pathname.split("/");
  const coursesIndex = pathtree.findIndex((path) => path === "Courses");
  const breadcrumbs = pathtree.slice(coursesIndex + 2);

  return (
    <div>
      <h1>{breadcrumbs}</h1>
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {
          db.courses.find((course) => course._id === pathtree[coursesIndex + 1])
            ?.name
        }{" "}
        &gt; {breadcrumbs.join(" > ")}
      </h2>
    </div>
  );
}
