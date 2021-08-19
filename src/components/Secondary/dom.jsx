import React from 'react'
import { Row, Button, Col } from 'react-bootstrap';

export default function DomSecondaries(props) {
  const selectSecondary = props.selectSecondary

  return (
    <Row className="justify-content-around m-2 bg-dark p-3">
      <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectSecondary("DarkAssault")}>Dark</Button></Col>
      <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectSecondary("EarthAssault")}>Earth</Button></Col>
      <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectSecondary("ElecAssault")}>Elec</Button></Col>
      <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectSecondary("EnergyAssault")}>Energy</Button></Col>
      <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectSecondary("FireAssault")}>Fire</Button></Col>
      <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectSecondary("IceAssault")}>Ice</Button></Col>
      <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectSecondary("MartialAssault")}>Martial</Button></Col>
      <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectSecondary("PsyAssault")}>Psionic</Button></Col>
      <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectSecondary("RadAssault")}>Rad</Button></Col>
      <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectSecondary("SavageAssault")}>Savage</Button></Col>
      <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectSecondary("ThornyAssault")}>Thorns</Button></Col>
    </Row>
  )
}
