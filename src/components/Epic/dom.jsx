import React from 'react'
import { Row, Button, Col } from 'react-bootstrap';

export default function DomEpics(props) {
  const selectEpic = props.selectEpic
  var x = window.matchMedia("(min-width: 900px)")
  return (
    <Row className="justify-content-around mt-3 bg-dark p-3 customBoxShadow">
      <Col xs={12} className="text-white fw-bolder mb-2 border-bottom"><h3  className="text-center">Epic</h3></Col>
        <Col xs={6} md={4}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectEpic("Other")}>{x.matches ? "Just Go Leviathan For Hibe!" : "Other"}</Button></Col>
        <Col xs={6} md={4}><Button size="lg" className="w-100 my-2 fw-bolder" variant="info" onClick={() => selectEpic("Mace")}>Mace</Button></Col>
    </Row>
  )
}
