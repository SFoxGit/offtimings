import React from 'react'
import { Row, Button, Col } from 'react-bootstrap';

export default function CorruptorEpics(props) {
  const selectEpic = props.selectEpic

  return (
    <Row className="justify-content-around mt-3 bg-dark p-3 customBoxShadow">
      <Col xs={12} className="text-white fw-bolder mb-2 border-bottom"><h3  className="text-center">Epic</h3></Col>
        <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectEpic("Elec Mastery")}>Elec</Button></Col>
        <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectEpic("Fire Mastery")}>Fire</Button></Col>
        <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectEpic("Mu")}>Mu Mastery</Button></Col>
        <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectEpic("Psy Mastery")}>Psychic</Button></Col>
        <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectEpic("Leviathan")}>Leviathan</Button></Col>
        <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectEpic("Soul")}>Soul</Button></Col>
    </Row>
  )
}
