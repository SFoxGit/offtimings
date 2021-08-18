import React, { useEffect, useState } from 'react'
import attacks from '../../data'
import Table from 'react-bootstrap/Table';
import { Container, Row, Button, Col } from 'react-bootstrap';

export default function AttacksTable() {
  const [powers, setPowers] = useState([])
  const [archtype, setArchtype] = useState()
  const [primary, setPrimary] = useState()

  const selectArchtype = (filter) => {
    setPrimary()
    console.log(filter)
    let arr = attacks.filter(function(power) {
      return power[13].includes(filter)
    })
    setPowers(arr)
    setArchtype(filter)
  }

  const selectPrimary = (filter) => {
    if (!primary) {

      let arr = powers.filter(function(power) {
        return power[8] === filter
      })
      console.log(arr)
      setPowers(arr)
      setPrimary(filter)
    } else {
      let arr = attacks.filter(function(power) {
        return power[13].includes(archtype)
      })
      setPowers(arr)
      let filterArr = arr.filter(function(power) {
        return power[8] === filter
      })
      setPowers(filterArr)
      setPrimary(filter)
    }
  }

  const selectSecondary = (filter) => {

  }

  useEffect(() => {
    setPowers(attacks)
  }, [setPowers])
  return (
    <Container>
      <Row>
        <Col>
          <Button size="lg" variant="primary" onClick={() => selectArchtype("blaster")}>Blaster</Button>
          <Button size="lg" variant="primary" onClick={() => selectArchtype("corruptor")}>Corruptor</Button>
          <Button size="lg" variant="primary" onClick={() => selectArchtype("defender")}>Defender</Button>
          <Button size="lg" variant="primary" onClick={() => selectArchtype("dom")}>Dom</Button>
          <Button size="lg" variant="primary" onClick={() => selectArchtype("controller")}>Controller</Button>
        </Col>
      </Row>
      {archtype === "blaster" || archtype === "corruptor" || archtype === "defender" ? 
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
      : 
      null
      }
      
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Power</th>
            <th>Effect Time</th>
            <th>Projectile Speed</th>
            <th>True Cast Time</th>
            <th>Set</th>
            <th>Range</th>
            <th>Time of Damage</th>
            <th>Required Follow Up</th>
          </tr>
        </thead>
        <tbody>
          {powers.map(power => (
            <tr key={power[0]}>
              <td>{power[0]}</td>
              <td>{power[3]}</td>
              <td>{power[4]}</td>
              <td>{power[7]}</td>
              <td>{power[8]}</td>
              <td>{power[9]}</td>
              <td>{power[10]}</td>
              <td>{power[11]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}
