"use client";

import {
  Button,
  Container,
  Form,
  InputGroup,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
} from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { BsGripVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import "./styles.css";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import AssignmentRow from "./AssignmentRow";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

  return (
    <div id="wd-assignments">
      <Container className="d-flex justify-content-between align-items-center mb-3">
        <InputGroup className="me-3">
          <InputGroupText>
            <FaSearch />
          </InputGroupText>
          <Form.Control placeholder="Search..." />
        </InputGroup>
        <Container className="text-nowrap text-end">
          <Button id="wd-add-assignment-group" variant="light" size="lg">
            + Group
          </Button>
          <Button
            id="wd-add-assignment"
            variant="danger"
            size="lg"
            className="me-1"
          >
            + Assignment
          </Button>
        </Container>
      </Container>
      <Container fluid="lg">
        <ListGroup className="rounded-0">
          <ListGroupItem className="wd-module p-0 fs-6">
            <div id="wd-assignments-title" className="wd-title p-3 ps-2 border">
              <Row>
                <Col md={1} className="d-flex align-items-center m-0">
                  <BsGripVertical className="fs-4" />
                </Col>
                <Col md={7} className="d-flex align-items-center">
                  <strong>ASSIGNMENTS</strong>
                </Col>
                <Col md={2} className="text-end align-items-center">
                  <span className="badge text-muted border m-1 me-0">
                    40% of Total
                  </span>
                </Col>
                <Col
                  md={1}
                  className="d-flex text-end align-items-center justify-content-end"
                >
                  <FaPlus className="fs-4 text-muted" />
                </Col>
                <Col
                  md={1}
                  className="d-flex text-end align-items-center justify-content-end"
                >
                  <IoEllipsisVertical className="fs-4 text-muted" />
                </Col>
              </Row>
            </div>
          </ListGroupItem>
        </ListGroup>
        <ListGroup className="rounded-0 border-5 border-start border-success">
          {assignments
            .filter((assignment) => assignment.course === cid)
            .map((assignment) => (
              <ListGroupItem className="wd-lesson p-3">
                <AssignmentRow assignment={assignment} />
              </ListGroupItem>
            ))}
        </ListGroup>
      </Container>
    </div>
  );
}
