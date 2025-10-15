import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import { Container } from "react-bootstrap";
import Title from "./Title";

export default async function CoursesLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {
  const { cid } = await params;

  return (
    <Container id="wd-courses">
      <Title />
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation cid={cid} />
        </div>
        <div className="flex-fill">{children}</div>
      </div>
    </Container>
  );
}
