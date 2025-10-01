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
import { FaCheckCircle, FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { RiFileEditLine } from "react-icons/ri";

export default function Assignments() {
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
          <ListGroupItem className="wd-lesson p-3">
            <Row>
              <Col md={2} className="d-flex align-items-center">
                <BsGripVertical className="fs-4 me-3" />
                <RiFileEditLine className="fs-4 me-3" />
              </Col>
              <Col md={8} className="align-items-center ps-0">
                <strong>A1</strong>
                <div>
                  <span className="text-danger me-2 text-nowrap">
                    Multiple Modules
                  </span>
                  <span className="text-muted me-2 small text-nowrap">|</span>
                  <span className="text-muted me-2 small text-nowrap">
                    Not available until May 6 at 12:00am
                  </span>
                  <span className="text-muted me-2 small">|</span>
                </div>
                <div className="text-muted small">
                  <span className="text-muted me-2 small">
                    Due May 13 at 11:59pm
                  </span>
                  <span className="text-muted me-2 small">|</span>
                  <span className="text-muted me-2 small">100 pts</span>
                </div>
              </Col>
              <Col
                md={1}
                className="text-end d-flex align-items-center justify-content-end"
              >
                <FaCheckCircle className="text-success fs-5" />
              </Col>
              <Col md={1} className="d-flex align-items-center">
                <IoEllipsisVertical className="fs-4" />
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem className="wd-lesson p-3">
            <Row>
              <Col md={2} className="d-flex align-items-center">
                <BsGripVertical className="fs-4 me-3" />
                <RiFileEditLine className="fs-4 me-3" />
              </Col>
              <Col md={8} className="align-items-center ps-0">
                <strong>A2</strong>
                <div>
                  <span className="text-danger me-2 text-nowrap">
                    Multiple Modules
                  </span>
                  <span className="text-muted me-2 small text-nowrap">|</span>
                  <span className="text-muted me-2 small text-nowrap">
                    Not available until May 13 at 12:00am
                  </span>
                  <span className="text-muted me-2 small">|</span>
                </div>
                <div className="text-muted small">
                  <span className="text-muted me-2 small">
                    Due May 20 at 11:59pm
                  </span>
                  <span className="text-muted me-2 small">|</span>
                  <span className="text-muted me-2 small">100 pts</span>
                </div>
              </Col>
              <Col
                md={1}
                className="text-end d-flex align-items-center justify-content-end"
              >
                <FaCheckCircle className="text-success fs-5" />
              </Col>
              <Col md={1} className="d-flex align-items-center">
                <IoEllipsisVertical className="fs-4" />
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem className="wd-lesson p-3">
            <Row>
              <Col md={2} className="d-flex align-items-center">
                <BsGripVertical className="fs-4 me-3" />
                <RiFileEditLine className="fs-4 me-3" />
              </Col>
              <Col md={8} className="align-items-center ps-0">
                <strong>A3</strong>
                <div>
                  <span className="text-danger me-2 text-nowrap">
                    Multiple Modules
                  </span>
                  <span className="text-muted me-2 small text-nowrap">|</span>
                  <span className="text-muted me-2 small text-nowrap">
                    Not available until May 20 at 12:00am
                  </span>
                  <span className="text-muted me-2 small">|</span>
                </div>
                <div className="text-muted small">
                  <span className="text-muted me-2 small">
                    Due May 27 at 11:59pm
                  </span>
                  <span className="text-muted me-2 small">|</span>
                  <span className="text-muted me-2 small">100 pts</span>
                </div>
              </Col>
              <Col
                md={1}
                className="text-end d-flex align-items-center justify-content-end"
              >
                <FaCheckCircle className="text-success fs-5" />
              </Col>
              <Col md={1} className="d-flex align-items-center">
                <IoEllipsisVertical className="fs-4" />
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </Container>
    </div>
  );
}
