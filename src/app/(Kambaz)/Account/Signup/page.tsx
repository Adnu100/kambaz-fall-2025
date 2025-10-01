"use client";

import Link from "next/link";
import { Button, FormControl, FormGroup } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <FormGroup className="mb-3" controlId="wd-signup-username">
        <FormControl className="mb-3" placeholder="username" />
      </FormGroup>
      <FormGroup className="mb-3" controlId="wd-signup-password">
        <FormControl className="mb-3" type="password" placeholder="password" />
      </FormGroup>
      <FormGroup className="mb-3" controlId="wd-signup-verify-password">
        <FormControl
          className="mb-3"
          type="password"
          placeholder="verify password"
        />
      </FormGroup>
      <Button className="w-100 mb-3" color="primary" href="Profile">
        Signup
      </Button>
      <Link href="Signin" id="wd-signup-link">
        Signin
      </Link>
    </div>
  );
}
