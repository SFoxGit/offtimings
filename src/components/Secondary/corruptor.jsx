import React from 'react'
import { Row, Button, Col } from 'react-bootstrap';

export default function CorruptorSecondaries(props) {
  const selectSecondary = props.selectSecondary

  return (
    <Row className="justify-content-around mt-3 bg-dark p-3 customBoxShadow">
      <Col xs={12} className="text-white fw-bolder mb-2 border-bottom"><h3>Buff/Debuff Type</h3></Col>
            <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectSecondary("Poison")}>Poison</Button></Col>
            <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectSecondary("RadEmission")}>Rad</Button></Col>
            <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectSecondary("Nature")}>Nature</Button></Col>
            <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectSecondary("other")}>Other</Button></Col>
        </Row>
  )
}
