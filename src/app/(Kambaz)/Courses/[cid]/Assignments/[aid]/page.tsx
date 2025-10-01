"use client";

import {
  Badge,
  Button,
  CloseButton,
  Col,
  Container,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  InputGroup,
  Row,
} from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <FormGroup className="mb-3" controlId="wd-name">
        <FormLabel>Assignment Name</FormLabel>
        <FormControl value="A1" />
      </FormGroup>
      <Container className="mb-3 border p-3">
        <p className="mb-3">
          The assignment is{" "}
          <span className="text-danger">available online</span>
        </p>
        <p className="mb-3">
          Submit a link to the landing page of your Web application running on
          Netlify.
        </p>
        <p className="mb-3">The landing page should include the following:</p>
        <ul className="mb-3">
          <li>Your full name and section</li>
          <li>Links to each of the lab assignments</li>
          <li>Link to the Kanbas application</li>
          <li>Links to all relevant source code repositories</li>
        </ul>
        <p className="mb-3">
          The Kanbas application should include a link to navigate back to the
          landing page.
        </p>
      </Container>
      <FormGroup as={Row} className="mb-3" controlId="wd-points">
        <FormLabel className="text-end" column sm={4}>
          Points
        </FormLabel>
        <Col sm={8}>
          <FormControl value="100" />
        </Col>
      </FormGroup>
      <FormGroup as={Row} className="mb-3" controlId="wd-group">
        <FormLabel className="text-end" column sm={4}>
          Assignment Group
        </FormLabel>
        <Col sm={8}>
          <FormSelect>
            <option>ASSIGNMENTS</option>
            <option>QUIZES</option>
          </FormSelect>
        </Col>
      </FormGroup>
      <FormGroup as={Row} className="mb-3" controlId="wd-display-grade-as">
        <FormLabel className="text-end" column sm={4}>
          Display Grade as
        </FormLabel>
        <Col sm={8}>
          <FormSelect>
            <option>Percentage</option>
            <option>Number</option>
          </FormSelect>
        </Col>
      </FormGroup>
      <FormGroup as={Row} className="mb-3" controlId="wd-submission-type">
        <FormLabel className="text-end" column sm={4}>
          Submittion Type
        </FormLabel>
        <Col className="border p-3" sm={8}>
          <FormSelect className="mb-3">
            <option>Online</option>
            <option>Offline</option>
          </FormSelect>
          <div className="mb-3">
            <strong>Online Entry Options</strong>
          </div>
          <FormCheck
            className="mb-3"
            checked={false}
            id="wd-text-entry"
            label="Text Entry"
          />
          <FormCheck
            className="mb-3"
            checked={true}
            id="wd-website-url"
            label="Website URL"
          />
          <FormCheck
            className="mb-3"
            checked={false}
            id="wd-media-recordings"
            label="Media Recordings"
          />
          <FormCheck
            className="mb-3"
            checked={false}
            id="wd-student-annotation"
            label="Student Annotation"
          />
          <FormCheck
            className="mb-3"
            checked={false}
            id="wd-file-uploads"
            label="File Uploads"
          />
        </Col>
      </FormGroup>
      <Row className="mb-3" controlId="wd-submission-type">
        <Col className="text-end" sm={4}>
          Assign
        </Col>
        <Col className="border p-3" sm={8}>
          <FormGroup className="mb-3" controlId="wd-assign-to">
            <FormLabel>
              <strong>Assign to</strong>
            </FormLabel>
            <FormControl className="mb-3" />
          </FormGroup>
          <Badge className="mb-3" text="black" bg="light">
            Everyone
            <CloseButton variant="black" className="ms-1" />
          </Badge>
          <FormGroup className="mb-3" controlId="wd-due-date">
            <FormLabel>
              <strong>Due</strong>
            </FormLabel>
            <InputGroup>
              <FormControl type="datetime-local" value="2024-06-13 23:59" />
            </InputGroup>
          </FormGroup>
          <Row>
            <Col sm={6}>
              <FormGroup className="mb-3" controlId="wd-available-from">
                <FormLabel>
                  <strong>Available from</strong>
                </FormLabel>
                <InputGroup>
                  <FormControl type="datetime-local" value="2024-06-06 23:59" />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup className="mb-3" controlId="wd-available-until">
                <FormLabel>
                  <strong>Until</strong>
                </FormLabel>
                <InputGroup>
                  <FormControl type="datetime-local" />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </Row>
      <Container className="text-nowrap text-end">
        <Button id="wd-add-assignment-group" variant="light" size="lg">
          Cancel
        </Button>
        <Button
          id="wd-add-assignment"
          variant="danger"
          size="lg"
          className="me-1"
        >
          Save
        </Button>
      </Container>
    </div>
  );
}
