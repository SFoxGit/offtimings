import React from 'react'
import { Row, Button, Col } from 'react-bootstrap';

export default function BlasterSecondaries(props) {
  const selectSecondary = props.selectSecondary
  const setSecondary = props.setSecondary

  return (
    <Row>
      <Col>
        <Button size="lg" variant="info" onClick={() => selectSecondary("SonicManip")}>Sonic</Button>
        <Button size="lg" variant="info" onClick={() => selectSecondary("Ninja")}>Ninja</Button>
        <Button size="lg" variant="info" onClick={() => selectSecondary("TactArrow")}>Tactical Arrow</Button>
        <Button size="lg" variant="info" onClick={() => selectSecondary("Plant")}>Plant</Button>
        <Button size="lg" variant="info" onClick={() => selectSecondary("Temporal")}>Temporal</Button>
        <Button size="lg" variant="info" onClick={() => setSecondary("other")}>Other</Button>
      </Col>
    </Row>
  )
}
