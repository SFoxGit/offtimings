import React from 'react'
import { useState, useEffect } from 'react'
import { Row, Col, Form } from 'react-bootstrap'

export default function Resists(props) {
  // const [targetRes, setTargetRes] = useState(0.4255)
  const [resDebuff, setResDebuff] = useState(0)
  const smashingLethal = props.smashingLethal
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
    <Row>
      <Col>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Defender - EF</Form.Label>
          <Form.Check type="checkbox" onChange={(e) => e.target.checked ? updateResists(0.4) : updateResists(-0.4)} />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Defender - Envenom</Form.Label>
          <Form.Check type="checkbox" onChange={(e) => e.target.checked ? updateResists(0.3) : updateResists(-0.3)} />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Defender - Corrosive</Form.Label>
          <Form.Check type="checkbox" onChange={(e) => e.target.checked ? updateResists(0.225) : updateResists(-0.225)} />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Corr/Cont - EF</Form.Label>
          <Form.Check type="checkbox" onChange={(e) => e.target.checked ? updateResists(0.3) : updateResists(-0.3)} />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Corr/Cont - Envenom</Form.Label>
          <Form.Check type="checkbox" onChange={(e) => e.target.checked ? updateResists(0.225) : updateResists(-0.225)} />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Corr/Cont - Corrosive</Form.Label>
          <Form.Check type="checkbox" onChange={(e) => e.target.checked ? updateResists(0.1875) : updateResists(-0.1875)} />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Achilles</Form.Label>
          <Form.Check type="checkbox" onChange={(e) => e.target.checked ? updateResists(0.2) : updateResists(-0.2)} />
        </Form.Group>
      </Col>
      <Col>{smashingLethal}</Col>
    </Row>
  )
}
