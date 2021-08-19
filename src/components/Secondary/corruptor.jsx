import React from 'react'
import { Row, Button, Col } from 'react-bootstrap';

export default function CorruptorSecondaries(props) {
  const selectSecondary = props.selectSecondary

  return (
    <Row className="justify-content-around m-2 bg-dark p-3">
            <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" onClick={() => selectSecondary("Poison")}>Poison</Button></Col>
            <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" onClick={() => selectSecondary("RadEmission")}>Rad</Button></Col>
            <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" onClick={() => selectSecondary("Nature")}>Nature</Button></Col>
            <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" onClick={() => selectSecondary("other")}>Other</Button></Col>
        </Row>
  )
}
