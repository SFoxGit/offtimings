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
import DomEpics from '../Epic/dom';
import Distance from '../Distance/distance';
import Chain from '../Chain/chain';

export default function AttacksTable(props) {
  const [powers, setPowers] = useState([])
  // const [archtype, setArchtype] = useState()
  // const [primary, setPrimary] = useState()
  // const [secondary, setSecondary] = useState()
  // const [epic, setEpic] = useState()
  const archtype = props.archtype
  const setArchtype = props.setArchtype
  const primary = props.primary
  const setPrimary = props.setPrimary
  const secondary = props.secondary
  const setSecondary = props.setSecondary
  const epic = props.epic
  const setEpic = props.setEpic
  const [distance, setDistance] = useState(90)
  const [sortedBy, setSortedBy] = useState()
  const [attackChain, setAttackChain] = useState([])

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

  const sortPowers = (currentSort) => {
    let asc;
    let desc;
    if (currentSort !== sortedBy) {
      asc = 1;
      desc = -1;
    } else {
      asc = -1;
      desc = 1;
    };
    if (currentSort === "Power") {
      const newArr = powers.sort((a, b) => {
        let fa = a[0].toLowerCase();
        let fb = b[0].toLowerCase();
        if (fa < fb) {
          return desc;
        };
        if (fb < fa) {
          return asc;
        };
        return null;
      });
      setPowers(newArr)
    }
    if (currentSort === "TimeOfDamage") {
      const newArr = powers.sort((a, b) => {
        let fa = (distance / a[4] + a[3]);
        let fb = (distance / b[4] + b[3]);
        if (fa < fb) {
          return desc;
        };
        if (fb < fa) {
          return asc;
        };
        return null;
      });
      setPowers(newArr)
    }
    if (currentSort === "FollowUp") {
      const newArr = powers.sort((a, b) => {
        let fa = (distance / a[4] + a[3] - a[7]);
        let fb = (distance / b[4] + b[3] - b[7]);
        if (fa < fb) {
          return desc;
        };
        if (fb < fa) {
          return asc;
        };
        return null;
      });
      setPowers(newArr)
    }
    if (currentSort === "EffectTime") {
      const newArr = powers.sort((a, b) => {
        let fa = a[3];
        let fb = b[3];
        if (fa < fb) {
          return desc;
        };
        if (fb < fa) {
          return asc;
        };
        return null;
      });
      setPowers(newArr)
    }
    if (currentSort === "Speed") {
      const newArr = powers.sort((a, b) => {
        let fa = a[4];
        let fb = b[4];
        if (fa < fb) {
          return desc;
        };
        if (fb < fa) {
          return asc;
        };
        return null;
      });
      setPowers(newArr)
    }
    if (currentSort === "CastTime") {
      const newArr = powers.sort((a, b) => {
        let fa = a[7];
        let fb = b[7];
        if (fa < fb) {
          return desc;
        };
        if (fb < fa) {
          return asc;
        };
        return null;
      });
      setPowers(newArr)
    }
    if (currentSort === "Set") {
      const newArr = powers.sort((a, b) => {
        let fa = a[8];
        let fb = b[8];
        if (fa < fb) {
          return desc;
        };
        if (fb < fa) {
          return asc;
        };
        return null;
      });
      setPowers(newArr)
    }
    if (currentSort === "Range") {
      const newArr = powers.sort((a, b) => {
        let fa = a[9];
        let fb = b[9];
        if (fa < fb) {
          return desc;
        };
        if (fb < fa) {
          return asc;
        };
        return null;
      });
      setPowers(newArr)
    }
    if (currentSort !== sortedBy) { setSortedBy(currentSort) } else { setSortedBy() }
  }

  const addAttack = (power, effectTime, speed, cast) => {
    if (attackChain.length) {
      if (!attackChain.some(row => row[0] === power)) {
        const newArr = [...attackChain, [power, effectTime, speed, cast, distance]]
        setAttackChain(newArr)
      }
    } else {
      setAttackChain([[power, effectTime, speed, cast, distance]])
    }
  }

  const changeCursor = (e) => {
    e.target.style.cursor = "pointer"
  }

  useEffect(() => {
    setPowers(attacks)
  }, [setPowers])
  return (
    <Container>
      <Container>
        <Row className="justify-content-around mt-3 bg-dark p-3 customBoxShadow">
          <Col xs={12} className="text-white fw-bolder mb-2 border-bottom"><h3  className="text-center">Archtype</h3></Col>
          <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="primary" onClick={() => selectArchtype("blaster")}>Blaster</Button></Col>
          <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="primary" onClick={() => selectArchtype("corruptor")}>Corruptor</Button></Col>
          <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="primary" onClick={() => selectArchtype("defender")}>Defender</Button></Col>
          <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="primary" onClick={() => selectArchtype("dom")}>Dom</Button></Col>
          <Col xs={6} md={2}><Button size="lg" className="w-100 my-2 fw-bolder" variant="primary" onClick={() => selectArchtype("controller")}>Controller</Button></Col>
        </Row>

        {/* Displaying Primary Blast Buttons */}
        {archtype === "blaster" || archtype === "corruptor" || archtype === "defender" ? <Blasts selectPrimary={selectPrimary} /> : null}
        {archtype === "dom" || archtype === "controller" ? <Controls selectPrimary={selectPrimary} archtype={archtype} /> : null}
        {/* Displaying Secondary Options Per Archtype */}
        {primary && archtype === "blaster" ? <BlasterSecondaries selectSecondary={selectSecondary} /> : null}
        {primary && (archtype === "defender" || archtype === "controller" || archtype === "corruptor") ? <CorruptorSecondaries selectSecondary={selectSecondary} setSecondary={setSecondary} /> : null}
        {primary && archtype === 'dom' ? <DomSecondaries selectSecondary={selectSecondary} setSecondary={setSecondary} /> : null}
        {/* Displaying Epic Options Per Archtype */}
        {primary && secondary && archtype === "blaster" ? <BlasterEpics selectEpic={selectEpic} setEpic={setEpic} /> : null}
        {primary && secondary && (archtype === "defender" || archtype === "corruptor") ? <CorruptorEpics selectEpic={selectEpic} /> : null}
        {primary && secondary && (archtype === "dom" || archtype === "controller") ? <DomEpics selectEpic={selectEpic} /> : null}
        <Distance distance={distance} setDistance={setDistance} />
      </Container>
      {attackChain.length ?
        <Chain attackChain={attackChain} setAttackChain={setAttackChain} distance={distance} />
        :
        null}

      <Table striped bordered hover variant="dark" className="customBoxShadow">
        <thead>
          <tr>
            <th onMouseOver={changeCursor} onClick={() => sortPowers("Power")}>Power</th>
            <th onMouseOver={changeCursor} onClick={() => sortPowers("EffectTime")}>Effect Time</th>
            <th onMouseOver={changeCursor} onClick={() => sortPowers("Speed")}>Projectile Speed</th>
            <th onMouseOver={changeCursor} onClick={() => sortPowers("CastTime")}>True Cast Time</th>
            <th onMouseOver={changeCursor} onClick={() => sortPowers("Set")}>Set</th>
            <th onMouseOver={changeCursor} onClick={() => sortPowers("Range")}>Range</th>
            <th onMouseOver={changeCursor} onClick={() => sortPowers("TimeOfDamage")}>Time of Damage</th>
            <th onMouseOver={changeCursor} onClick={() => sortPowers("FollowUp")}>Required Follow Up</th>
          </tr>
        </thead>
        <tbody>
          {powers.map(power => (
            <tr key={power[0] + power[8]} onClick={() => addAttack(power[0], power[3], power[4], power[7])}>
              <td>{power[0]}</td>
              <td>{power[3]}</td>
              <td>{power[4]}</td>
              <td>{power[7]}</td>
              <td>{power[8]}</td>
              <td>{power[9]}</td>
              <td onMouseOver={changeCursor}>{(distance / power[4] + power[3]).toFixed(3)}</td>
              <td>{(distance / power[4] + power[3] - power[7]).toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}
