import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="#"><h1>Attack Chain Timing</h1></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav className="mr-auto border-0">
      <Nav.Link href="#calculator" className="border-0">Calculator</Nav.Link>
      <Nav.Link href="#instructions" className="border-0">Instructions</Nav.Link>
    </Nav>
      <Navbar.Text>
        
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
