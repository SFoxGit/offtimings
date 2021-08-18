import React from 'react'
import { Row, Button, Col } from 'react-bootstrap';

export default function Blasts(props) {
  const selectPrimary = props.selectPrimary

  return (
    <Row>
      <Col>
        <Button size="lg" variant="secondary" onClick={() => selectPrimary("Archery")}>Archery</Button>
        <Button size="lg" variant="secondary" onClick={() => selectPrimary("AssaultRiffle")}>Assault Rifle</Button>
        <Button size="lg" variant="secondary" onClick={() => selectPrimary("Beam")}>Beam Rifle</Button>
        <Button size="lg" variant="secondary" onClick={() => selectPrimary("Dark")}>Dark</Button>
        <Button size="lg" variant="secondary" onClick={() => selectPrimary("DP")}>Dual Pistols</Button>
        <Button size="lg" variant="secondary" onClick={() => selectPrimary("Elec")}>Elec Blast</Button>
        <Button size="lg" variant="secondary" onClick={() => selectPrimary("Energy")}>Energy</Button>
        <Button size="lg" variant="secondary" onClick={() => selectPrimary("Fire")}>Fire</Button>
        <Button size="lg" variant="secondary" onClick={() => selectPrimary("Ice")}>Ice</Button>
        <Button size="lg" variant="secondary" onClick={() => selectPrimary("Psy")}>Psychic</Button>
        <Button size="lg" variant="secondary" onClick={() => selectPrimary("RadBlast")}>Rad Blast</Button>
        <Button size="lg" variant="secondary" onClick={() => selectPrimary("Sonic")}>Sonic Blast</Button>
        <Button size="lg" variant="secondary" onClick={() => selectPrimary("Water")}>Water</Button>
      </Col>
    </Row>
  )
}
