import React from 'react'
import { Row, Button, Col } from 'react-bootstrap';

export default function DomEpics(props) {
  const selectEpic = props.selectEpic

  return (
    <Row>
      <Col>
        <Button size="lg" variant="danger" onClick={() => selectEpic("Other")}>Just Go Leviathan For Hibe!</Button>
        <Button size="lg" variant="danger" onClick={() => selectEpic("Mace")}>Mace</Button>
      </Col>
    </Row>
  )
}
