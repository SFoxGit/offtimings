import React from 'react'
import { Row, Button, Col } from 'react-bootstrap';

export default function DomSecondaries(props) {
  const selectSecondary = props.selectSecondary

  return (
    <Row className="justify-content-around mt-3 bg-dark p-3 customBoxShadow">
      <Col xs={12} className="text-white fw-bolder mb-2 border-bottom"><h3  className="text-center">Assault Type</h3></Col>
      <Col xs={6} md={3}><Button size="lg" className="w-100 my-2 fw-bolder" variant="success" onClick={() => selectSecondary("DarkAssault")}>Dark</Button></Col>
      <Col xs={6} md={3}><Button size="lg" className="w-100 my-2 fw-bolder" variant="success" onClick={() => selectSecondary("EarthAssault")}>Earth</Button></Col>
      <Col xs={6} md={3}><Button size="lg" className="w-100 my-2 fw-bolder" variant="success" onClick={() => selectSecondary("ElecAssault")}>Elec</Button></Col>
      <Col xs={6} md={3}><Button size="lg" className="w-100 my-2 fw-bolder" variant="success" onClick={() => selectSecondary("EnergyAssault")}>Energy</Button></Col>
      <Col xs={6} md={3}><Button size="lg" className="w-100 my-2 fw-bolder" variant="success" onClick={() => selectSecondary("FireAssault")}>Fire</Button></Col>
      <Col xs={6} md={3}><Button size="lg" className="w-100 my-2 fw-bolder" variant="success" onClick={() => selectSecondary("IceAssault")}>Ice</Button></Col>
      <Col xs={6} md={3}><Button size="lg" className="w-100 my-2 fw-bolder" variant="success" onClick={() => selectSecondary("MartialAssault")}>Martial</Button></Col>
      <Col xs={6} md={3}><Button size="lg" className="w-100 my-2 fw-bolder" variant="success" onClick={() => selectSecondary("PsyAssault")}>Psionic</Button></Col>
      <Col xs={6} md={3}><Button size="lg" className="w-100 my-2 fw-bolder" variant="success" onClick={() => selectSecondary("RadAssault")}>Rad</Button></Col>
      <Col xs={6} md={3}><Button size="lg" className="w-100 my-2 fw-bolder" variant="success" onClick={() => selectSecondary("SavageAssault")}>Savage</Button></Col>
      <Col xs={6} md={3}><Button size="lg" className="w-100 my-2 fw-bolder" variant="success" onClick={() => selectSecondary("ThornyAssault")}>Thorns</Button></Col>
    </Row>
  )
}
