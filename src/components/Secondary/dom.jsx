import React from 'react'
import { Row, Button, Col } from 'react-bootstrap';

export default function DomSecondaries(props) {
  const selectSecondary = props.selectSecondary

  return (
    <Row>
          <Col>
            <Button size="lg" variant="info" onClick={() => selectSecondary("DarkAssault")}>Dark</Button>
            <Button size="lg" variant="info" onClick={() => selectSecondary("EarthAssault")}>Earth</Button>
            <Button size="lg" variant="info" onClick={() => selectSecondary("ElecAssault")}>Elec</Button>
            <Button size="lg" variant="info" onClick={() => selectSecondary("EnergyAssault")}>Energy</Button>
            <Button size="lg" variant="info" onClick={() => selectSecondary("FireAssault")}>Fire</Button>
            <Button size="lg" variant="info" onClick={() => selectSecondary("IceAssault")}>Ice</Button>
            <Button size="lg" variant="info" onClick={() => selectSecondary("MartialAssault")}>Martial</Button>
            <Button size="lg" variant="info" onClick={() => selectSecondary("PsyAssault")}>Psionic</Button>
            <Button size="lg" variant="info" onClick={() => selectSecondary("RadAssault")}>Rad</Button>
            <Button size="lg" variant="info" onClick={() => selectSecondary("SavageAssault")}>Savage</Button>
            <Button size="lg" variant="info" onClick={() => selectSecondary("ThornyAssault")}>Thorns</Button>
          </Col>
        </Row>
  )
}
