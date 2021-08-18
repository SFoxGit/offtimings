import React, { useEffect, useState } from 'react'
import attacks from '../../data'
import Table from 'react-bootstrap/Table';
import { Container, Row, Button, Col } from 'react-bootstrap';

export default function AttacksTable() {
  const [powers, setPowers] = useState([])
  const [archtype, setArchtype] = useState()
  const [primary, setPrimary] = useState()
  const [secondary, setSecondary] = useState()
  const [epic, setEpic] = useState()

  const selectArchtype = (filter) => {
    setPrimary()
    console.log(filter)
    let arr = attacks.filter(function (power) {
      return power[13].includes(filter)
    })
    setPowers(arr)
    setArchtype(filter)
  }

  const selectPrimary = (filter) => {
    setSecondary()
    if (!primary) {

      let arr = powers.filter(function (power) {
        return power[8] === filter
      })
      console.log(arr)
      setPowers(arr)
      setPrimary(filter)
    } else {
      let arr = attacks.filter(function (power) {
        return power[13].includes(archtype)
      })
      setPowers(arr)
      let filterArr = arr.filter(function (power) {
        return power[8] === filter
      })
      setPowers(filterArr)
      setPrimary(filter)
    }
  }

  const selectSecondary = (filter) => {
    if (!secondary) {
      let arr = attacks.filter(function (power) {
        return power[8] === filter
      })
      setSecondary(filter)
      setPowers([...powers, ...arr])
    } else {
      let arr = attacks.filter(function (power) {
        return power[13].includes(archtype)
      })
      let filterArr = arr.filter(function (power) {
        return power[8] === primary
      })
      let secondaryArr = arr.filter(function (power) {
        return power[8] === filter
      })
      setSecondary(filter)
      setPowers([...filterArr, ...secondaryArr])
    }
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
      {archtype === "dom" || archtype === "controller" ?
        <Row>
          <Col>
            <Button size="lg" variant="secondary" onClick={() => selectPrimary("Fire")}>Fire</Button>
            <Button size="lg" variant="secondary" onClick={() => selectPrimary("EarthControl")}>Earth</Button>
            <Button size="lg" variant="secondary" onClick={() => selectPrimary("IllControl")}>Illusion</Button>
            <Button size="lg" variant="secondary" onClick={() => selectPrimary("IceControl")}>Ice</Button>
            <Button size="lg" variant="secondary" onClick={() => selectPrimary("GravControl")}>Grav</Button>
            <Button size="lg" variant="secondary" onClick={() => selectPrimary("DarkControl")}>Dark</Button>
            <Button size="lg" variant="secondary" onClick={() => selectPrimary("ElecControl")}>Elec</Button>
            <Button size="lg" variant="secondary" onClick={() => selectPrimary("MindControl")}>Mind</Button>
            <Button size="lg" variant="secondary" onClick={() => selectPrimary("PlantControl")}>Plant</Button>
          </Col>
        </Row>
        :
        null
      }
      {primary && archtype === "blaster" ?
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
        :
        null
      }
      {primary && (archtype === "defender" || archtype === "controller" || archtype === "corruptor") ?
        <Row>
          <Col>
            <Button size="lg" variant="info" onClick={() => selectSecondary("Poison")}>Poison</Button>
            <Button size="lg" variant="info" onClick={() => selectSecondary("RadEmission")}>Rad</Button>
            <Button size="lg" variant="info" onClick={() => selectSecondary("Nature")}>Nature</Button>
            <Button size="lg" variant="info" onClick={() => setSecondary("other")}>Other</Button>
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
