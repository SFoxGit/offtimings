import React from 'react'
import { Row, Button, Col } from 'react-bootstrap';

export default function BlasterSecondaries(props) {
  const selectSecondary = props.selectSecondary
  const setSecondary = props.setSecondary

  return (
    <Row className="justify-content-around m-2 bg-dark p-3">
        <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectSecondary("SonicManip")}>Sonic</Button></Col>
        <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectSecondary("Ninja")}>Ninja</Button></Col>
        <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectSecondary("TactArrow")}>Tactical Arrow</Button></Col>
        <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectSecondary("Plant")}>Plant</Button></Col>
        <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectSecondary("Temporal")}>Temporal</Button></Col>
        <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => setSecondary("other")}>Other</Button></Col>
    </Row>
  )
}
