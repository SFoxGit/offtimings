import React from 'react'
import { Row, Button, Col } from 'react-bootstrap';

export default function CorruptorSecondaries(props) {
  const selectSecondary = props.selectSecondary
  const setSecondary = props.setSecondary

  return (
    <Row>
          <Col>
            <Button size="lg" variant="info" onClick={() => selectSecondary("Poison")}>Poison</Button>
            <Button size="lg" variant="info" onClick={() => selectSecondary("RadEmission")}>Rad</Button>
            <Button size="lg" variant="info" onClick={() => selectSecondary("Nature")}>Nature</Button>
            <Button size="lg" variant="info" onClick={() => setSecondary("other")}>Other</Button>
          </Col>
        </Row>
  )
}
