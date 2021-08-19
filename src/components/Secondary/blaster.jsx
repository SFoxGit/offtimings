import React from 'react'
import { Row, Button, Col } from 'react-bootstrap';

export default function BlasterSecondaries(props) {
  const selectSecondary = props.selectSecondary

  return (
    <Row className="justify-content-around mt-3 bg-dark p-3 customBoxShadow">
      <Col xs={12} className="text-white fw-bolder mb-2 border-bottom"><h3  className="text-center">Secondary</h3></Col>
        <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="success" onClick={() => selectSecondary("SonicManip")}>Sonic</Button></Col>
        <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="success" onClick={() => selectSecondary("Ninja")}>Ninja</Button></Col>
        <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="success" onClick={() => selectSecondary("TactArrow")}>Tactical Arrow</Button></Col>
        <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="success" onClick={() => selectSecondary("Plant")}>Plant</Button></Col>
        <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="success" onClick={() => selectSecondary("Temporal")}>Temporal</Button></Col>
        <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="success" onClick={() => selectSecondary("other")}>Other</Button></Col>
    </Row>
  )
}
