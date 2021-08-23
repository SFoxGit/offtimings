import React from 'react'
import { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import modifiers from '../../modifiers';
import Enhancements from '../Enhancements/enhancements';

export default function ChainAttack(props) {
  const attack = props.attack
  const totalCast = props.totalCast
  const archtype = props.archtype
  const attackChain = props.attackChain
  const setAttackChain = props.setAttackChain
  const setForced = props.setForced
  const forced = props.forced
  const index = props.index
  const [smashProc, setSmashProc] = useState(0)
  const [lethalProc, setLethalProc] = useState(0)
  const [fireProc, setFireProc] = useState(0)
  const [negativeProc, setNegativeProc] = useState(0)
  const [energyProc, setEnergyProc] = useState(0)
  const [toxicProc, setToxicProc] = useState(0)
  const [psionicProc, setPsionicProc] = useState(0)
  const procRate = ((attack.recharge / (1 + attack.slottedRecharge) + (attack.castTime)) * 3.5 / 60 * 100).toFixed(2)
  const procAOE = (((attack.recharge / (1 + attack.slottedRecharge) + attack.castTime) * 3.5 / (60 * (1 + (attack.radius * (((11 * attack.arc) + 540) / 40000))))) * 100).toFixed(2)
  let damageBonus = attack.bonusDamage || 123
  let damage = 0;
  var x = window.matchMedia("(max-width: 700px)")

  const updateDistance = (newDistance, index) => {
    let newArr = attackChain;
    newArr[index].distance = newDistance
    setAttackChain(newArr)
    setForced(!forced)
  }
  const updateBonus = (newBonus, index) => {
    let newArr = attackChain;
    newArr[index].bonusDamage = newBonus
    setAttackChain(newArr)
    setForced(!forced)
  }

  const removeAttack = (index) => {
    let newArr = attackChain;
    newArr.splice(index, 1)
    setAttackChain(newArr)
    setForced(!forced)
  }
  if (!attack.damage.includes("tick")) {
    attack.damage.forEach(dam => damage += dam)
    if (archtype === "blaster") { damage = damage * modifiers.blaster }
    if (archtype === "corruptor") { damage = damage * modifiers.corruptor }
    if (archtype === "defender") { damage = damage * modifiers.defender }
    if (archtype === "controller") { damage = damage * modifiers.controller }
    if (archtype === "dom") { damage = damage * modifiers.dom }
  }
  const modDamage = damage * (1 + (((damageBonus) / 100) * (1 - Math.atan(((damageBonus) / 100) * 0.33) * 2 / Math.PI * 0.8))) + smashProc + lethalProc + fireProc + negativeProc + energyProc + toxicProc + psionicProc

  return (
    <Row key={"chain" + attack.name}>
      <Row className="mt-2 border-bottom d-flex align-items-center chain" key={"chainHeader" + attack.name}>
        <Col className="p-2 text-center">{attack.name}</Col>
        <Col className="p-2 text-center">{(totalCast).toFixed(3)}</Col>
        <Col className="p-2 d-flex justify-content-center"><input className="text-center w-50" defaultValue={attack.distance} onChange={e => updateDistance(e.target.value, index)}></input></Col>
        <Col className="p-2 text-center">{(totalCast + attack.effectSeconds + attack.distance / attack.speed).toFixed(3)}</Col>
        {attack.aoe ? <Col className="p-2 text-center">{procAOE < 90 ? procAOE + '%' : 90 + '%'}</Col> : <Col className="p-2 text-center">{procRate < 90 ? procRate + '%' : 90 + '%'}</Col>}
        <Col className="p-2 text-center d-flex justify-content-center align-items-center">{damage.toFixed(2)}</Col>
        <Col className="p-2 d-flex justify-content-center"><input className="text-center w-50" defaultValue={damageBonus} onChange={e => updateBonus(e.target.value, index)}></input></Col>
        <Col className="p-2 text-center d-flex justify-content-center align-items-center">{modDamage.toFixed(2)}</Col>
        <Col className="p-2 text-center d-flex justify-content-center align-items-center"><Button className="fw-bolder text-dark w-75 text-center remove" variant="danger" onClick={() => removeAttack(index)}>{x.matches ? "X" : "Remove"}</Button></Col>
      </Row>
      <Enhancements
        index={index}
        archtype={archtype}
        aoe={attack.aoe}
        smashProc={smashProc}
        lethalProc={lethalProc}
        fireProc={fireProc}
        negativeProc={negativeProc}
        energyProc={energyProc}
        toxicProc={toxicProc}
        psionicProc={psionicProc}
        setSmashProc={setSmashProc}
        setLethalProc={setLethalProc}
        setFireProc={setFireProc}
        setNegativeProc={setNegativeProc}
        setEnergyProc={setEnergyProc}
        setToxicProc={setToxicProc}
        setPsionicProc={setPsionicProc}
        radius={attack.radius}
        arc={attack.arc}
        castTime={attack.castTime}
        recharge={attack.recharge}
        slottedRecharge={attack.slottedRecharge}
        enhArr={attack.enhancements}
      />
    </Row>
  )
}
