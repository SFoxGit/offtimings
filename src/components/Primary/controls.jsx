import React from 'react'
import { Row, Button, Col } from 'react-bootstrap';

export default function Controls(props) {
  const selectPrimary = props.selectPrimary

  return (
    <Row>
          <Col>
            <Button size="lg" variant="secondary" onClick={() => selectPrimary("FireControl")}>Fire</Button>
            <Button size="lg" variant="secondary" onClick={() => selectPrimary("EarthControl")}>Earth</Button>
            <Button size="lg" variant="secondary" onClick={() => selectPrimary("IllControl")}>Illusion</Button>
            <Button size="lg" variant="secondary" onClick={() => selectPrimary("IceControl")}>Ice</Button>
            <Button size="lg" variant="secondary" onClick={() => selectPrimary("GravControl")}>Grav</Button>
            <Button size="lg" variant="secondary" onClick={() => selectPrimary("DarkControl")}>Dark</Button>
            <Button size="lg" variant="secondary" onClick={() => selectPrimary("ElecControl")}>Elec</Button>
            <Button size="lg" variant="secondary" onClick={() => selectPrimary("MindControl")}>Mind</Button>
            <Button size="lg" variant="secondary" onClick={() => selectPrimary("PlantControl")}>Plant</Button>
          </Col>
        </Row>
  )
}
