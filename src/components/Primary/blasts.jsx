import React from 'react'
import { Row, Button, Col } from 'react-bootstrap';

export default function Blasts(props) {
  const selectPrimary = props.selectPrimary

  return (
    <Row className="justify-content-around mt-3 bg-dark p-3 customBoxShadow">
      <Col xs={12} className="text-white fw-bolder mb-2 border-bottom"><h3>Blast Type</h3></Col>
        <Col xs={6} md={3}><Button size="lg" className="w-100 my-2 fw-bolder" variant="secondary" onClick={() => selectPrimary("Archery")}>Archery</Button></Col>
        <Col xs={6} md={3}><Button size="lg" className="w-100 my-2 fw-bolder" variant="secondary" onClick={() => selectPrimary("AssaultRiffle")}>Assault Rifle</Button></Col>
        <Col xs={6} md={3}><Button size="lg" className="w-100 my-2 fw-bolder" variant="secondary" onClick={() => selectPrimary("Beam")}>Beam Rifle</Button></Col>
        <Col xs={6} md={3}><Button size="lg" className="w-100 my-2 fw-bolder" variant="secondary" onClick={() => selectPrimary("Dark")}>Dark</Button></Col>
        <Col xs={6} md={3}><Button size="lg" className="w-100 my-2 fw-bolder" variant="secondary" onClick={() => selectPrimary("DP")}>Dual Pistols</Button></Col>
        <Col xs={6} md={3}><Button size="lg" className="w-100 my-2 fw-bolder" variant="secondary" onClick={() => selectPrimary("Elec")}>Elec Blast</Button></Col>
        <Col xs={6} md={3}><Button size="lg" className="w-100 my-2 fw-bolder" variant="secondary" onClick={() => selectPrimary("Energy")}>Energy</Button></Col>
        <Col xs={6} md={3}><Button size="lg" className="w-100 my-2 fw-bolder" variant="secondary" onClick={() => selectPrimary("Fire")}>Fire</Button></Col>
        <Col xs={6} md={3}><Button size="lg" className="w-100 my-2 fw-bolder" variant="secondary" onClick={() => selectPrimary("Ice")}>Ice</Button></Col>
        <Col xs={6} md={3}><Button size="lg" className="w-100 my-2 fw-bolder" variant="secondary" onClick={() => selectPrimary("Psy")}>Psychic</Button></Col>
        <Col xs={6} md={3}><Button size="lg" className="w-100 my-2 fw-bolder" variant="secondary" onClick={() => selectPrimary("RadBlast")}>Rad Blast</Button></Col>
        <Col xs={6} md={3}><Button size="lg" className="w-100 my-2 fw-bolder" variant="secondary" onClick={() => selectPrimary("Sonic")}>Sonic Blast</Button></Col>
        <Col xs={6} md={3}><Button size="lg" className="w-100 my-2 fw-bolder" variant="secondary" onClick={() => selectPrimary("Water")}>Water</Button></Col>
    </Row>
  )
}
