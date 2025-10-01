"use client";

import Link from "next/link";
import { Button, FormControl, FormGroup } from "react-bootstrap";

export default function Signin() {
  return (
    <div id="wd-signin-screen p-3">
      <h3>Sign in</h3>
      <FormGroup className="mb-3" controlId="wd-username">
        <FormControl className="mb-3" placeholder="username" />
      </FormGroup>
      <FormGroup className="mb-3" controlId="wd-password">
        <FormControl className="mb-3" type="password" placeholder="password" />
      </FormGroup>
      <Button className="w-100 mb-3" color="primary" href="/Dashboard">
        Signin
      </Button>
      <Link href="Signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
