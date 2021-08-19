import React, { useState } from 'react'
import { Row, Col, Button, Container } from 'react-bootstrap';

export default function Chain(props) {
  const [forced, setForced] = useState(true)
  const attackChain = props.attackChain
  const setAttackChain = props.setAttackChain
  const updateDistance = (newDistance, index) => {
    let newArr = attackChain;
    newArr[index][4] = newDistance
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
    <div className="justify-content-around my-2 bg-dark p-3 text-white fw-bolder" >
      {forced ? <></> : <div></div>}
      <Row className="justify-content-center "><h3>Attack Chain</h3></Row>
      <Row className="mt-2 border-bottom d-flex align-items-center">
            <Col className="p-2">Name</Col>
            <Col className="p-2">Cast At</Col>
            <Col className="p-2">Distance From Target</Col>
            <Col className="p-2">Hit Time</Col>
            <Col className="p-2">Remove Attack</Col>
          </Row>
      {attackChain.map((attack, index) => {

        let totalCast = 0;
        for (let i = 0; i < index; i++) {
          totalCast += attackChain[i][3]
        }
        return (

          <Row className="mt-2 border-bottom d-flex align-items-center" key={"chain" + attack[0]}>
            <Col className="p-2">{attack[0]}</Col>
            <Col className="p-2">{(totalCast).toFixed(3)}</Col>
            <Col className="p-2"><input defaultValue={attack[4]} onChange={e => updateDistance(e.target.value, index)}></input></Col>
            <Col className="p-2">{(totalCast + attack[1] + attack[4] / attack[2]).toFixed(3)}</Col>
            <Col className="p-2"><Button className="fw-bolder text-dark" variant="danger" onClick={() => removeAttack(index)}>Remove</Button></Col>
          </Row>
        )
      })}
    </div>
  )
}
