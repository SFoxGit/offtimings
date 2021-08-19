import React, { useState } from 'react'
import { Row, Button, Col, Form } from 'react-bootstrap';

export default function Chain(props) {
  const [forced, setForced] = useState(true)
  const attackChain = props.attackChain
  const setAttackChain = props.setAttackChain
  const distance = props.distance
  const updateDistance = (newDistance, index) => {
    let newArr = attackChain;
    newArr[index][4] = newDistance
    setAttackChain(newArr)
    setForced(!forced)
  }
  return (
    <>
    {forced ? <></> : <div></div>}
      {attackChain.map((attack, index) => {

        let totalCast = 0;
        for (let i = 0; i < index; i++) {
          totalCast += attackChain[i][3]
        }
        return (
        <Row key={"chain" + attack[0]}>
          <Col>{attack[0]}</Col>
          <Col>{totalCast}</Col>
          <Col><input defaultValue={attack[4]} onChange={e => updateDistance(e.target.value, index)}></input></Col>
          <Col>{totalCast + attack[1] + attack[4] / attack[2]}</Col>
        </Row>)
      })}
    </>
  )
}
