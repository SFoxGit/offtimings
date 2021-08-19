import React from 'react'
import { Row, Button, Col } from 'react-bootstrap';

export default function Controls(props) {
  const selectPrimary = props.selectPrimary
  const archtype = props.archtype

  return (
    <Row className="justify-content-around mt-3 bg-dark p-3 customBoxShadow">
      <Col xs={12} className="text-white fw-bolder mb-2 border-bottom"><h3>Control Type</h3></Col>
      <Col xs={6} md={4}><Button size="lg" className="w-100 my-2 fw-bolder" variant="secondary" onClick={() => selectPrimary("FireControl")}>Fire</Button></Col>
      <Col xs={6} md={4}><Button size="lg" className="w-100 my-2 fw-bolder" variant="secondary" onClick={() => selectPrimary("EarthControl")}>Earth</Button></Col>
      {archtype === "controller" ? <Col xs={6} md={4}><Button size="lg" className="w-100 my-2 fw-bolder" variant="secondary" onClick={() => selectPrimary("IllControl")}>Illusion</Button></Col> : null}
      <Col xs={6} md={4}><Button size="lg" className="w-100 my-2 fw-bolder" variant="secondary" onClick={() => selectPrimary("IceControl")}>Ice</Button></Col>
      <Col xs={6} md={4}><Button size="lg" className="w-100 my-2 fw-bolder" variant="secondary" onClick={() => selectPrimary("GravControl")}>Grav</Button></Col>
      <Col xs={6} md={4}><Button size="lg" className="w-100 my-2 fw-bolder" variant="secondary" onClick={() => selectPrimary("DarkControl")}>Dark</Button></Col>
      <Col xs={6} md={4}><Button size="lg" className="w-100 my-2 fw-bolder" variant="secondary" onClick={() => selectPrimary("ElecControl")}>Elec</Button></Col>
      <Col xs={6} md={4}><Button size="lg" className="w-100 my-2 fw-bolder" variant="secondary" onClick={() => selectPrimary("MindControl")}>Mind</Button></Col>
      <Col xs={6} md={4}><Button size="lg" className="w-100 my-2 fw-bolder" variant="secondary" onClick={() => selectPrimary("PlantControl")}>Plant</Button></Col>
    </Row>
  )
}
