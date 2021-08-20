import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Header(props) {
  const archtype = props.archtype
  const primary = props.primary
  const secondary = props.secondary
  const epic = props.epic

  return (
    <Navbar bg="dark" variant="dark" sticky="top">
  <Container>
    <Navbar.Brand href="#"><h1>Attack Chain Timing</h1></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav className="mr-auto border-0">
      <Nav.Link href="#calculator" className="border-0">Calculator</Nav.Link>
      <Nav.Link href="#instructions" className="border-0">Instructions</Nav.Link>
    </Nav>
     {archtype ? <Navbar.Text className="ml-4 fw-bolder text-light">
        {archtype} : {primary} / {secondary} / {epic}
      </Navbar.Text> : null}
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
