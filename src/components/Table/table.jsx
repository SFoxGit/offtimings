import React, { useEffect, useState } from 'react'
import attacks from '../../data'
import Table from 'react-bootstrap/Table';
import { Container, Row, Button, Col } from 'react-bootstrap';
import Blasts from '../Primary/blasts';
import Controls from '../Primary/controls';
import BlasterSecondaries from '../Secondary/blaster';
import CorruptorSecondaries from '../Secondary/corruptor';
import DomSecondaries from '../Secondary/dom';
import BlasterEpics from '../Epic/blaster';
import CorruptorEpics from '../Epic/corruptor';

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
    setEpic()
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

  const selectEpic = (filter) => {
    if (!epic) {
      let arr = attacks.filter(function (power) {
        return power[8] === filter
      })
      setEpic(filter)
      setPowers([...powers, ...arr])
    } else {
      let arr = attacks.filter(function (power) {
        return power[13].includes(archtype)
      })
      let filterArr = arr.filter(function (power) {
        return power[8] === primary || power[8] === secondary || power[8] === filter
      })
      setEpic(filter)
      setPowers(filterArr)
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
        <Blasts selectPrimary={selectPrimary} />
        :
        null
      }
      {archtype === "dom" || archtype === "controller" ?
        <Controls selectPrimary={selectPrimary} />
        :
        null
      }
      {primary && archtype === "blaster" ?
        <BlasterSecondaries selectSecondary={selectSecondary} />
        :
        null
      }
      {primary && (archtype === "defender" || archtype === "controller" || archtype === "corruptor") ?
        <CorruptorSecondaries selectSecondary={selectSecondary} setSecondary={setSecondary} />
        :
        null
      }
      {primary && archtype === 'dom' ?
        <DomSecondaries selectSecondary={selectSecondary} setSecondary={setSecondary} />
        :
        null
      }
      {primary && secondary && archtype === "blaster" ? <BlasterEpics selectEpic={selectEpic} setEpic={setEpic} /> : null}
      {primary && secondary && (archtype === "defender" || archtype === "corruptor") ? <CorruptorEpics selectEpic={selectEpic} /> : null}
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
            <tr key={power[0] + power[8]}>
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
