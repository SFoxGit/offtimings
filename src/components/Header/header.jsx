import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Header(props) {
  const archtype = props.archtype
  const primary = props.primary
  const secondary = props.secondary
  const epic = props.epic

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand className="m-2" href="#"><h1>Attack Chain Timing</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto border-0">
            <Nav.Link href="#calculator" className="border-0">Calculator</Nav.Link>
            <Nav.Link href="#instructions" className="border-0">Instructions</Nav.Link>
          </Nav>
        </Navbar.Collapse>
            {archtype ? <Navbar.Text className="m-4 fw-bolder text-info">
              {archtype} : {primary} / {secondary} / {epic}
            </Navbar.Text> : null}
      </Container>
    </Navbar>
  )
}
