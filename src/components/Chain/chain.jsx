import React, { useState } from 'react'
import { Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

export default function Chain(props) {
  const [forced, setForced] = useState(true)
  const [startTime, setStartTime] = useState(0)
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
    <div className="justify-content-around mb-3 bg-dark p-3 text-white fw-bolder customBoxShadow" >
      {forced ? <></> : <div></div>}
      <Row className="justify-content-center "><h3  className="text-center">Attack Chain</h3></Row>
      <Row>
        <Col xs={8} md={10}></Col>
        <Col xs={4} md={2}>
        {/* <input className="w-25" type="number" value={startTime} onChange={e => setStartTime(e.target.value)}></input> */}
        <InputGroup>
          <InputGroup.Text className="w-50 bg-info p-3 text-black fw-bolder">Late by: </InputGroup.Text>
          <FormControl className="text-center" defaultValue={startTime} onChange={e => setStartTime(parseFloat(e.target.value))}/>
        </InputGroup>
        </Col>
        </Row>
      <Row className="mt-2 border-bottom d-flex align-items-center">
            <Col className="p-2 text-center">Name</Col>
            <Col className="p-2 text-center">Cast At</Col>
            <Col className="p-2 text-center">Distance From Target</Col>
            <Col className="p-2 text-center">Hit Time</Col>
            <Col className="p-2 text-center">Remove Attack</Col>
          </Row>
      {attackChain.map((attack, index) => {

        let totalCast = 0.000;
        totalCast += startTime;
        for (let i = 0; i < index; i++) {
          totalCast += attackChain[i][3]
        }
        return (

          <Row className="mt-2 border-bottom d-flex align-items-center" key={"chain" + attack[0]}>
            <Col className="p-2 text-center">{attack[0]}</Col>
            <Col className="p-2 text-center">{(totalCast).toFixed(3)}</Col>
            <Col className="p-2 d-flex justify-content-center"><input className="text-center w-25" defaultValue={attack[4]} onChange={e => updateDistance(e.target.value, index)}></input></Col>
            <Col className="p-2 text-center">{(totalCast + attack[1] + attack[4] / attack[2]).toFixed(3)}</Col>
            <Col className="p-2 text-center"><Button className="fw-bolder text-dark" variant="danger" onClick={() => removeAttack(index)}>Remove</Button></Col>
          </Row>
        )
      })}
    </div>
  )
}
