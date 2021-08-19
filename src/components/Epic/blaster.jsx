import React from 'react'
import { Row, Button, Col } from 'react-bootstrap';

export default function BlasterEpics(props) {
  const selectEpic = props.selectEpic

  return (
    <Row className="justify-content-around m-2 bg-dark p-3">
        <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="danger" onClick={() => selectEpic("Elec Mastery")}>Elec</Button></Col>
        <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="danger" onClick={() => selectEpic("Fire Mastery")}>Fire</Button></Col>
        <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="danger" onClick={() => selectEpic("Mu")}>Mu Mastery</Button></Col>
        <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="danger" onClick={() => selectEpic("Munitions")}>Munitions</Button></Col>
        <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="danger" onClick={() => selectEpic("Leviathan")}>Leviathan</Button></Col>
        <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="danger" onClick={() => selectEpic("Soul")}>Soul</Button></Col>
    </Row>
  )
}
