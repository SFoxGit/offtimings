import React from 'react'
import { Row, Button, Col } from 'react-bootstrap';

export default function DomEpics(props) {
  const selectEpic = props.selectEpic

  return (
    <Row className="justify-content-around mt-2 bg-dark p-3">
        <Col xs={6} md={4}><Button size="lg" className="w-100 my-2 fw-bolder" variant="danger" onClick={() => selectEpic("Other")}>Just Go Leviathan For Hibe!</Button></Col>
        <Col xs={6} md={4}><Button size="lg" className="w-100 my-2 fw-bolder" variant="danger" onClick={() => selectEpic("Mace")}>Mace</Button></Col>
    </Row>
  )
}
