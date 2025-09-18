"use client";

import Nav from "react-bootstrap/Nav";
import Link from "next/link";

export default function TOC() {
  return (
    <Nav variant="pills">
      <Nav.Item>
        <Nav.Link href="/Labs" as={Link}>
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Labs/Lab1" as={Link}>
          Lab 1
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Labs/Lab2" as={Link}>
          Lab 2
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Labs/Lab3" as={Link}>
          Lab 3
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/" as={Link}>
          Kambaz
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://github.com/Adnu100">My GitHub</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
