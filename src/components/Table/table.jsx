import React, { useEffect, useState } from 'react'
import attacks from '../../data';
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
import modifiers from '../../modifiers';

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
  var x = window.matchMedia("(min-width: 900px)")
  var y = window.matchMedia("(min-width: 400px)")

  const selectArchtype = (filter) => {
    setPrimary()
    let arr = attacks.filter(function (power) {
      return power.archtype.includes(filter)
    })
    setPowers(arr)
    setArchtype(filter)
  }

  const selectPrimary = (filter) => {
    setSecondary()
    setEpic()
    if (!primary) {

      let arr = powers.filter(function (power) {
        return power.powerset === filter
      })
      setPowers(arr)
      setPrimary(filter)
    } else {
      let arr = attacks.filter(function (power) {
        return power.archtype.includes(archtype)
      })
      setPowers(arr)
      let filterArr = arr.filter(function (power) {
        return power.powerset === filter
      })
      setPowers(filterArr)
      setPrimary(filter)
    }
  }

  const selectSecondary = (filter) => {
    if (!secondary) {
      let arr = attacks.filter(function (power) {
        return power.powerset === filter
      })
      setSecondary(filter)
      setPowers([...powers, ...arr])
    } else {
      let arr = attacks.filter(function (power) {
        return power.archtype.includes(archtype)
      })
      let filterArr = arr.filter(function (power) {
        return power.powerset === primary
      })
      let secondaryArr = arr.filter(function (power) {
        return power.powerset === filter
      })
      setSecondary(filter)
      setPowers([...filterArr, ...secondaryArr])
    }
  }

  const selectEpic = (filter) => {
    if (!epic) {
      let arr = attacks.filter(function (power) {
        return power.powerset === filter
      })
      setEpic(filter)
      setPowers([...powers, ...arr])
    } else {
      let arr = attacks.filter(function (power) {
        return power.archtype.includes(archtype)
      })
      let filterArr = arr.filter(function (power) {
        return power.powerset === primary || power.powerset === secondary || power.powerset === filter
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
        let fa = a.name.toLowerCase();
        let fb = b.name.toLowerCase();
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
        let fa = (distance / a.speed + a.effectSeconds);
        let fb = (distance / b.speed + b.effectSeconds);
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
        let fa = (distance / a.speed + a.effectSeconds - a.castTime);
        let fb = (distance / b.speed + b.effectSeconds - b.castTime);
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
        let fa = a.effectSeconds;
        let fb = b.effectSeconds;
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
        let fa = a.speed;
        let fb = b.speed;
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
        let fa = a.castTime;
        let fb = b.castTime;
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
        let fa = a.powerset;
        let fb = b.powerset;
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
        let fa = a.baseRange;
        let fb = b.baseRange;
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
    if (currentSort === "Base Dam") {
      const newArr = powers.sort((a, b) => {
        let fa = a.damage[0];
        let fb = b.damage[0];
        if (a.damage[0] === "tick") {fa = a.damage[1]}
        if (b.damage[0] === "tick") {fb = b.damage[1]}
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

  const addAttack = (power) => {
    if (attackChain.length) {
      if (!attackChain.some(row => row.name === power.name)) {
        power.distance = distance
        const newArr = [...attackChain, power]
        setAttackChain(newArr)
      }
    } else {
      power.distance = distance
      setAttackChain([power])
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
          <Col xs={12} className="text-white fw-bolder mb-2 border-bottom"><h3 className="text-center">Archtype</h3></Col>
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
        <Chain attackChain={attackChain} setAttackChain={setAttackChain} distance={distance} archtype={archtype}/>
        :
        null}
      <Container className="p-0">
        <Row><Col xs={12}>
          <Table striped bordered hover variant="dark" className="customBoxShadow customTable">
            <thead>
              <tr>
                <th onMouseOver={changeCursor} onClick={() => sortPowers("Power")}>Power</th>
                {x.matches ? <th onMouseOver={changeCursor} onClick={() => sortPowers("EffectTime")}>Effect Time</th> : null}
                <th onMouseOver={changeCursor} onClick={() => sortPowers("Speed")}>Projectile Speed</th>
                <th onMouseOver={changeCursor} onClick={() => sortPowers("CastTime")}>True Cast Time</th>
                {x.matches ? <th onMouseOver={changeCursor} onClick={() => sortPowers("Set")}>Set</th> : null}
                {x.matches ? <th onMouseOver={changeCursor} onClick={() => sortPowers("Range")}>Range</th> : null}
                <th onMouseOver={changeCursor} onClick={() => sortPowers("Base Dam")}>Base Dam</th>
                <th onMouseOver={changeCursor} onClick={() => sortPowers("TimeOfDamage")}>Time of Damage</th>
                {y.matches ? <th onMouseOver={changeCursor} onClick={() => sortPowers("FollowUp")}>Required Follow Up</th> : null}
              </tr>
            </thead>
            <tbody>
              {powers.map(power => (
                <tr key={power.name + power.powerset} onClick={() => addAttack(power)}>
                  <td>{power.name}</td>
                  {x.matches ? <td>{power.effectSeconds}</td> : null}
                  <td>{power.speed === 999999999 ? "Instant" : power.speed}</td>
                  <td>{power.castTime}</td>
                  {x.matches ? <td>{power.powerset}</td>: null}
                  {x.matches ? <td>{power.baseRange}</td> : null}
                  <td>{archtype ? (power.damage[0] === "tick" ? (power.damage[1]*modifiers[archtype]).toFixed(3) :(power.damage[0]*modifiers[archtype]).toFixed(3)) : (power.damage[0] === "tick" ? power.damage[1] : power.damage[0])}</td>
                  <td onMouseOver={changeCursor}>{(distance / power.speed + power.effectSeconds).toFixed(3)}</td>
                  {y.matches ? <td>{(distance / power.speed + power.effectSeconds - power.castTime).toFixed(3)}</td> : null}
                </tr>
              ))}
            </tbody>
          </Table>
        </Col></Row>
      </Container>
    </Container>
  )
}
