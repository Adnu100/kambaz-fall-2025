"use client";

import { Button, FormControl, FormGroup } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <FormGroup className="mb-3" controlId="wd-profile-username">
        <FormControl className="mb-3" value="alice" />
      </FormGroup>
      <FormGroup className="mb-3" controlId="wd-signup-password">
        <FormControl className="mb-3" type="password" value="123" />
      </FormGroup>
      <FormGroup className="mb-3" controlId="wd-firstname">
        <FormControl className="mb-3" value="Alice" />
      </FormGroup>
      <FormGroup className="mb-3" controlId="wd-lastname">
        <FormControl className="mb-3" value="Wonderland" />
      </FormGroup>
      <FormGroup className="mb-3" controlId="wd-dob">
        <FormControl className="mb-3" type="date" />
      </FormGroup>
      <FormGroup className="mb-3" controlId="wd-email">
        <FormControl
          className="mb-3"
          type="email"
          value="alice@wonderland.com"
        />
      </FormGroup>
      <FormGroup className="mb-3" controlId="wd-role">
        <FormControl className="mb-3" value="User" />
      </FormGroup>
      <Button className="w-100 mb-3" variant="danger" href="Signin">
        Signout
      </Button>
    </div>
  );
}
