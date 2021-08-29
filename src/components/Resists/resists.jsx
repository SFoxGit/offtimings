import React from 'react'
import { useState, useEffect } from 'react'
import { Row, Col, Form } from 'react-bootstrap'

export default function Resists(props) {
  // const [targetRes, setTargetRes] = useState(0.4255)
  const [resDebuff, setResDebuff] = useState(0)
  // const smashingLethal = props.smashingLethal
  const setSmashingLethal = props.setSmashingLethal
  // const fireCold = props.fireCold
  const setFireCold = props.setFireCold
  // const energyNegative = props.energyNegative
  const setEnergyNegative = props.setEnergyNegative
  // const toxicPsionic = props.toxicPsionic
  const setToxicPsionic = props.setToxicPsionic
  const SLRes = 0.4033
  const FCRes = 0.4255
  const ENERes = 0.3984
  const TPRes = 0.3880
  const updateResists = (debuff) => {
    setResDebuff(resDebuff - debuff)
  }
  
  useEffect(() => {
    const enemyResist = (input) => {
      return input - (((((resDebuff * -1) * (1 - Math.atan((resDebuff * -1) * 1.2) * 2 / Math.PI * 1))) * (1 - input)))
    }
    setSmashingLethal(enemyResist(SLRes))
    setFireCold(enemyResist(FCRes))
    setEnergyNegative(enemyResist(ENERes))
    setToxicPsionic(enemyResist(TPRes))
    
   
  }, [resDebuff, setSmashingLethal, setFireCold, setEnergyNegative, setToxicPsionic])
  return (
    <Row className="mt-2">
      <Col xs={6} md={3} className="p-2">
        <Form.Group className="mb-3 bg-secondary border p-2 rounded resists" controlId="formBasicCheckbox">
          <Row><Form.Label  className="d-flex justify-content-center text-center">Defender - EF</Form.Label></Row>
          <Row><Form.Check  className="d-flex justify-content-center text-center" type="checkbox" onChange={(e) => e.target.checked ? updateResists(0.4) : updateResists(-0.4)} /></Row>
        </Form.Group>
      </Col>
      <Col xs={6} md={3} className="p-2">
        <Form.Group className="mb-3 bg-secondary border p-2 rounded resists" controlId="formBasicCheckbox">
          <Row><Form.Label  className="d-flex justify-content-center text-center">Defender - Envenom</Form.Label></Row>
          <Row><Form.Check  className="d-flex justify-content-center text-center" type="checkbox" onChange={(e) => e.target.checked ? updateResists(0.3) : updateResists(-0.3)} /></Row>
        </Form.Group>
      </Col>
      <Col xs={6} md={3} className="p-2">
        <Form.Group className="mb-3 bg-secondary border p-2 rounded resists" controlId="formBasicCheckbox">
          <Row><Form.Label  className="d-flex justify-content-center text-center">Defender - Corrosive</Form.Label></Row>
          <Row><Form.Check  className="d-flex justify-content-center text-center" type="checkbox" onChange={(e) => e.target.checked ? updateResists(0.225) : updateResists(-0.225)} /></Row>
        </Form.Group>
      </Col>
      <Col xs={6} md={3} className="p-2">
        <Form.Group className="mb-3 bg-secondary border p-2 rounded resists" controlId="formBasicCheckbox">
          <Row><Form.Label  className="d-flex justify-content-center text-center">Corr/Cont - EF</Form.Label></Row>
          <Row><Form.Check  className="d-flex justify-content-center text-center" type="checkbox" onChange={(e) => e.target.checked ? updateResists(0.3) : updateResists(-0.3)} /></Row>
        </Form.Group>
      </Col>
      <Col xs={6} md={3} className="p-2">
        <Form.Group className="mb-3 bg-secondary border p-2 rounded resists" controlId="formBasicCheckbox">
          <Row><Form.Label  className="d-flex justify-content-center text-center">Corr/Cont - Envenom</Form.Label></Row>
          <Row><Form.Check  className="d-flex justify-content-center text-center" type="checkbox" onChange={(e) => e.target.checked ? updateResists(0.225) : updateResists(-0.225)} /></Row>
        </Form.Group>
      </Col>
      <Col xs={6} md={3} className="p-2">
        <Form.Group className="mb-3 bg-secondary border p-2 rounded resists" controlId="formBasicCheckbox">
          <Row><Form.Label  className="d-flex justify-content-center text-center">Corr/Cont - Corrosive</Form.Label></Row>
          <Row><Form.Check  className="d-flex justify-content-center text-center" type="checkbox" onChange={(e) => e.target.checked ? updateResists(0.1875) : updateResists(-0.1875)} /></Row>
        </Form.Group>
      </Col>
      <Col xs={6} md={3} className="p-2">
        <Form.Group className="mb-3 bg-secondary border p-2 rounded resists" controlId="formBasicCheckbox">
          <Row><Form.Label  className="d-flex justify-content-center text-center">Achilles</Form.Label></Row>
          <Row><Form.Check  className="d-flex justify-content-center text-center" type="checkbox" onChange={(e) => e.target.checked ? updateResists(0.2) : updateResists(-0.2)} /></Row>
        </Form.Group>
      </Col>
    </Row>
  )
}
