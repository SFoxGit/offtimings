import React from 'react'
import { Row, Button, Col } from 'react-bootstrap';

export default function BlasterEpics(props) {
  const selectEpic = props.selectEpic

  return (
    <Row>
      <Col>
      <Button size="lg" variant="danger" onClick={() => selectEpic("Elec Mastery")}>Elec</Button>
      <Button size="lg" variant="danger" onClick={() => selectEpic("Fire Mastery")}>Fire</Button>
      <Button size="lg" variant="danger" onClick={() => selectEpic("Mu")}>Mu Mastery</Button>
      <Button size="lg" variant="danger" onClick={() => selectEpic("Munitions")}>Munitions</Button>
      <Button size="lg" variant="danger" onClick={() => selectEpic("Leviathan")}>Leviathan</Button>
      <Button size="lg" variant="danger" onClick={() => selectEpic("Soul")}>Soul</Button>
      </Col>
    </Row>
  )
}
