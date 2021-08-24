import React, { useState } from 'react'
import { Row, Col, Form } from 'react-bootstrap';

export default function EnhancementSelector(props) {
  const [checkBox, setCheckBox] = useState(true)
  const proc = props.proc
  const recharge = props.recharge
  const slottedRecharge = props.slottedRecharge
  const castTime = props.castTime
  const radius = props.radius
  const arc = props.arc
  const aoe = props.aoe
  const smashProc = props.smashProc
  const lethalProc = props.lethalProc
  const fireProc = props.fireProc
  const negativeProc = props.negativeProc
  const energyProc = props.energyProc
  const toxicProc = props.toxicProc
  const psionicProc = props.psionicProc
  const setSmashProc = props.setSmashProc
  const setLethalProc = props.setLethalProc
  const setFireProc = props.setFireProc
  const setNegativeProc = props.setNegativeProc
  const setEnergyProc = props.setEnergyProc
  const setToxicProc = props.setToxicProc
  const setPsionicProc = props.setPsionicProc


  const procRate = ((recharge / (1 + slottedRecharge/100) + castTime) * proc.ppm / 60)
  const procAOE = (((recharge / (1 + slottedRecharge/100) + castTime) * proc.ppm / (60 * (1 + (radius * (((11 * arc) + 540) / 40000))))))

  function updateDamage() {
    if (checkBox) {
      if (aoe) {
        if (procAOE > .90) {
          if (proc.damageType === "Smashing damage") { setSmashProc(smashProc + proc.damage * .9) }
          if (proc.damageType === "Lethal damage") { setLethalProc(lethalProc + proc.damage * .9) }
          if (proc.damageType === "Fire damage") { setFireProc(fireProc + proc.damage * .9) }
          if (proc.damageType === "Negative Energy damage") { setNegativeProc(negativeProc + proc.damage * .9) }
          if (proc.damageType === "Energy damage") { setEnergyProc(energyProc + proc.damage * .9) }
          if (proc.damageType === "Toxic damage") { setToxicProc(toxicProc + proc.damage * .9) }
          if (proc.damageType === "Psionic damage") { setPsionicProc(psionicProc + proc.damage * .9) }
          // setProcDamage((prevState) => ({...prevState, proc.damageType: procDamage[proc.damageType] + proc.damage * .9}))
        } else {
          if (proc.damageType === "Smashing damage") { setSmashProc(smashProc + proc.damage * procRate) }
          if (proc.damageType === "Lethal damage") { setLethalProc(lethalProc + proc.damage * procRate) }
          if (proc.damageType === "Fire damage") { setFireProc(fireProc + proc.damage * procRate) }
          if (proc.damageType === "Negative Energy damage") { setNegativeProc(negativeProc + proc.damage * procRate) }
          if (proc.damageType === "Energy damage") { setEnergyProc(energyProc + proc.damage * procRate) }
          if (proc.damageType === "Toxic damage") { setToxicProc(toxicProc + proc.damage * procRate) }
          if (proc.damageType === "Psionic damage") { setPsionicProc(psionicProc + proc.damage * procRate) }
          // setProcDamage((prevState) => ({...prevState, proc.damageType: procDamage[proc.damageType] + proc.damage * procRate}))
        }
      } else {
        if (procRate > .90) {
          if (proc.damageType === "Smashing damage") { setSmashProc(smashProc + proc.damage * .9) }
          if (proc.damageType === "Lethal damage") { setLethalProc(lethalProc + proc.damage * .9) }
          if (proc.damageType === "Fire damage") { setFireProc(fireProc + proc.damage * .9) }
          if (proc.damageType === "Negative Energy damage") { setNegativeProc(negativeProc + proc.damage * .9) }
          if (proc.damageType === "Energy damage") { setEnergyProc(energyProc + proc.damage * .9) }
          if (proc.damageType === "Toxic damage") { setToxicProc(toxicProc + proc.damage * .9) }
          if (proc.damageType === "Psionic damage") { setPsionicProc(psionicProc + proc.damage * .9) }
          // setProcDamage((prevState) => ({...prevState, proc.damageType: procDamage[proc.damageType] + proc.damage * .9}))
        } else {
          if (proc.damageType === "Smashing damage") { setSmashProc(smashProc + proc.damage * procRate) }
          if (proc.damageType === "Lethal damage") { setLethalProc(lethalProc + proc.damage * procRate) }
          if (proc.damageType === "Fire damage") { setFireProc(fireProc + proc.damage * procRate) }
          if (proc.damageType === "Negative Energy damage") { setNegativeProc(negativeProc + proc.damage * procRate) }
          if (proc.damageType === "Energy damage") { setEnergyProc(energyProc + proc.damage * procRate) }
          if (proc.damageType === "Toxic damage") { setToxicProc(toxicProc + proc.damage * procRate) }
          if (proc.damageType === "Psionic damage") { setPsionicProc(psionicProc + proc.damage * procRate) }
          // setProcDamage((prevState) => ({...prevState, proc.damageType: procDamage[proc.damageType] + proc.damage * procRate}))
        }
      }
    } else {
      if (aoe) {
        if (procAOE > .90) {
          if (proc.damageType === "Smashing damage") { setSmashProc(smashProc - proc.damage * .9) }
          if (proc.damageType === "Lethal damage") { setLethalProc(lethalProc - proc.damage * .9) }
          if (proc.damageType === "Fire damage") { setFireProc(fireProc - proc.damage * .9) }
          if (proc.damageType === "Negative Energy damage") { setNegativeProc(negativeProc - proc.damage * .9) }
          if (proc.damageType === "Energy damage") { setEnergyProc(energyProc - proc.damage * .9) }
          if (proc.damageType === "Toxic damage") { setToxicProc(toxicProc - proc.damage * .9) }
          if (proc.damageType === "Psionic damage") { setPsionicProc(psionicProc - proc.damage * .9) }
          // setProcDamage((prevState) => ({...prevState, proc.damageType: procDamage[proc.damageType] - proc.damage * .9}))
        } else {
          if (proc.damageType === "Smashing damage") { setSmashProc(smashProc - proc.damage * procRate) }
          if (proc.damageType === "Lethal damage") { setLethalProc(lethalProc - proc.damage * procRate) }
          if (proc.damageType === "Fire damage") { setFireProc(fireProc - proc.damage * procRate) }
          if (proc.damageType === "Negative Energy damage") { setNegativeProc(negativeProc - proc.damage * procRate) }
          if (proc.damageType === "Energy damage") { setEnergyProc(energyProc - proc.damage * procRate) }
          if (proc.damageType === "Toxic damage") { setToxicProc(toxicProc - proc.damage * procRate) }
          if (proc.damageType === "Psionic damage") { setPsionicProc(psionicProc - proc.damage * procRate) }
          // setProcDamage((prevState) => ({...prevState, proc.damageType: procDamage[proc.damageType] - proc.damage * procRate}))
        }
      } else {
        if (procRate > .90) {
          if (proc.damageType === "Smashing damage") { setSmashProc(smashProc - proc.damage * .9) }
          if (proc.damageType === "Lethal damage") { setLethalProc(lethalProc - proc.damage * .9) }
          if (proc.damageType === "Fire damage") { setFireProc(fireProc - proc.damage * .9) }
          if (proc.damageType === "Negative Energy damage") { setNegativeProc(negativeProc - proc.damage * .9) }
          if (proc.damageType === "Energy damage") { setEnergyProc(energyProc - proc.damage * .9) }
          if (proc.damageType === "Toxic damage") { setToxicProc(toxicProc - proc.damage * .9) }
          if (proc.damageType === "Psionic damage") { setPsionicProc(psionicProc - proc.damage * .9) }
          // setProcDamage((prevState) => ({...prevState, proc.damageType: procDamage[proc.damageType] - proc.damage * .9}))
        } else {
          if (proc.damageType === "Smashing damage") { setSmashProc(smashProc - proc.damage * procRate) }
          if (proc.damageType === "Lethal damage") { setLethalProc(lethalProc - proc.damage * procRate) }
          if (proc.damageType === "Fire damage") { setFireProc(fireProc - proc.damage * procRate) }
          if (proc.damageType === "Negative Energy damage") { setNegativeProc(negativeProc - proc.damage * procRate) }
          if (proc.damageType === "Energy damage") { setEnergyProc(energyProc - proc.damage * procRate) }
          if (proc.damageType === "Toxic damage") { setToxicProc(toxicProc - proc.damage * procRate) }
          if (proc.damageType === "Psionic damage") { setPsionicProc(psionicProc - proc.damage * procRate) }
          // setProcDamage((prevState) => ({...prevState, proc.damageType: procDamage[proc.damageType] - proc.damage * procRate}))
        }
      }

    }
    setCheckBox(!checkBox)
    console.log("toxic: " + toxicProc)
  }

  return (
    <Row key={proc.name}>
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
