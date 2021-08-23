import React, { useState } from 'react'
import { Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import ChainAttack from './chain.attack';

export default function Chain(props) {
  const [forced, setForced] = useState(true)
  const [startTime, setStartTime] = useState(0)
  const attackChain = props.attackChain
  const setAttackChain = props.setAttackChain
  const archtype = props.archtype

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
        let totalCast = 0.000;
        totalCast += startTime;
        for (let i = 0; i < index; i++) {
          totalCast += attackChain[i].castTime
        }
        return (
          <ChainAttack index={index} forced={forced} setForced={setForced} setAttackChain={setAttackChain} attackChain={attackChain} archtype={archtype} attack={attack} totalCast={totalCast}/>
        )
      })}
    </div>
  )
}
