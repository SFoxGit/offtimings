import React, { useState } from 'react'
import { Row, Col, Form } from 'react-bootstrap';

export default function EnhancementSelector(props) {
  const [checkBox, setCheckBox] = useState(true)
  const proc = props.proc
  let damage = props.damage
  const recharge = props.recharge
  const slottedRecharge = props.slottedRecharge
  const castTime = props.castTime
  const radius = props.radius
  const arc = props.arc
  const procDamage = props.procDamage
  const setProcDamage = props.setProcDamage

  const procRate = ((recharge / (1 + slottedRecharge) + castTime) * proc.ppm / 60)
  const procAOE = (((recharge / (1 + slottedRecharge) + castTime) * proc.ppm / (60 * (1 + (radius * (((11 * arc) + 540) / 40000))))))

  function updateDamage() {
    if (checkBox) {
      if (procRate > .90) {
        setProcDamage(procDamage + proc.damage * .9)
      } else {
        setProcDamage(procDamage + proc.damage * procRate)
      }
    } else {
      if (procRate > .90) {
        setProcDamage(procDamage - proc.damage * .9)
      } else {
        setProcDamage(procDamage - proc.damage * procRate)
      }
    }
    setCheckBox(!checkBox)
  }

  return (
    <Row>
      <Col>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" onChange={() => updateDamage()} />
        </Form.Group>
      </Col>
      <Col>{proc.name}</Col>
      <Col>{proc.ppm}</Col>
      <Col>{procRate > .90 ? proc.damage * .9 : proc.damage * procRate}</Col>
      <Col>{proc.damageType}</Col>
    </Row>

  )
}
