import React, { useState } from 'react'
import { Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import modifiers from '../../modifiers';

export default function Chain(props) {
  const [forced, setForced] = useState(true)
  const [startTime, setStartTime] = useState(0)
  const attackChain = props.attackChain
  const setAttackChain = props.setAttackChain
  const archtype = props.archtype
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
  return (
    <div className="justify-content-around mb-3 bg-dark p-3 text-white fw-bolder customBoxShadow" >
      {forced ? <></> : <div></div>}
      <Row className="justify-content-center "><h3 className="text-center">Attack Chain</h3></Row>
      <Row className="mt-2">
        <Col xs={2} md={10}></Col>
        <Col xs={8} md={2}>
          {/* <input className="w-25" type="number" value={startTime} onChange={e => setStartTime(e.target.value)}></input> */}
          <InputGroup>
            <InputGroup.Text className="w-50 bg-info text-black fw-bolder">Late by: </InputGroup.Text>
            <FormControl style={{ backgroundColor: "white" }} className="text-center" defaultValue={startTime} onChange={e => setStartTime(parseFloat(e.target.value))} />
          </InputGroup>
        </Col>
        <Col xs={2} md={0}></Col>
      </Row>
      <Row className="mt-2 border-bottom d-flex align-items-center chain">
        <Col className="p-2 text-center">Name</Col>
        <Col className="p-2 text-center">Cast At</Col>
        <Col className="p-2 text-center">Distance From Target</Col>
        <Col className="p-2 text-center">Hit Time</Col>
        <Col className="p-2 text-center">Proc Rate</Col>
        <Col className="p-2 text-center">Base Damage</Col>
        <Col className="p-2 text-center">Damage Bonus</Col>
        <Col className="p-2 text-center">Mod Damage</Col>
        <Col className="p-2 text-center">Remove Attack</Col>
      </Row>
      {attackChain.map((attack, index) => {
        console.log(attack)
        const procRate = ((attack.recharge+(attack.castTime))*3.5/60*100).toFixed(2)
        const procAOE = (((attack.recharge/(1+attack.slottedRecharge)+attack.castTime)*3.5/(60*(1+(attack.radius*(((11*attack.arc)+540)/40000)))))*100).toFixed(2)
        let damageBonus = attack.bonusDamage || 123
        let damage = 0;
        if (!attack.damage.includes("tick")) {
          attack.damage.forEach(dam => damage += dam)
          if (archtype === "blaster") {damage = damage*modifiers.blaster}
          if (archtype === "corruptor") {damage = damage*modifiers.corruptor}
          if (archtype === "defender") {damage = damage*modifiers.defender}
          if (archtype === "controller") {damage = damage*modifiers.controller}
          if (archtype === "dom") {damage = damage*modifiers.dom}
        }
        const modDamage = damage*(1+(((damageBonus)/100)*(1-Math.atan(((damageBonus)/100)*0.33)*2/Math.PI*0.8)))
        let totalCast = 0.000;
        totalCast += startTime;
        for (let i = 0; i < index; i++) {
          totalCast += attackChain[i].castTime
        }
        return (

          <Row className="mt-2 border-bottom d-flex align-items-center chain" key={"chain" + attack.name}>
            <Col className="p-2 text-center">{attack.name}</Col>
            <Col className="p-2 text-center">{(totalCast).toFixed(3)}</Col>
            <Col className="p-2 d-flex justify-content-center"><input className="text-center w-50" defaultValue={attack.distance} onChange={e => updateDistance(e.target.value, index)}></input></Col>
            <Col className="p-2 text-center">{(totalCast + attack.effectSeconds + attack.distance / attack.speed).toFixed(3)}</Col>
            {attack.aoe ? <Col className="p-2 text-center">{procAOE < 95 ? procAOE + '%' : 95 + '%'}</Col> :<Col className="p-2 text-center">{procRate < 95 ? procRate + '%' : 95 + '%'}</Col>}
            <Col className="p-2 text-center d-flex justify-content-center align-items-center">{damage.toFixed(2)}</Col>
            <Col className="p-2 d-flex justify-content-center"><input className="text-center w-50" defaultValue={damageBonus} onChange={e => updateBonus(e.target.value, index)}></input></Col>
            <Col className="p-2 text-center d-flex justify-content-center align-items-center">{modDamage.toFixed(2)}</Col>
            <Col className="p-2 text-center d-flex justify-content-center align-items-center"><Button className="fw-bolder text-dark w-75 text-center remove" variant="danger" onClick={() => removeAttack(index)}>{x.matches ? "X" : "Remove"}</Button></Col>
          </Row>
        )
      })}
    </div>
  )
}
