import React, { useState } from 'react'
import { useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

export default function EnhancementSelector(props) {
  const proc = props.proc
  const recharge = props.recharge
  const slottedRecharge = props.slottedRecharge
  const setSlottedRecharge = props.setSlottedRecharge
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
  const attack = props.attack
  const setAttack = props.setAttack
  const [checkBox, setCheckBox] = useState(false)


  const procRate = parseFloat((recharge / (1 + slottedRecharge / 100) + castTime) * proc.ppm / 60)
  const procRateBefore = parseFloat((recharge / (1 + (slottedRecharge + 23) / 100) + castTime) * proc.ppm / 60)
  const procAOE = parseFloat(((recharge / (1 + slottedRecharge / 100) + castTime) * proc.ppm / (60 * (1 + (radius * (((11 * arc) + 540) / 40000))))))
  const procAOEBefore = parseFloat(((recharge / (1 + (slottedRecharge + 23) / 100) + castTime) * proc.ppm / (60 * (1 + (radius * (((11 * arc) + 540) / 40000))))))

  const addProcDamage = (rate) => {
    if (rate > .90) {
      if (proc.damageType === "Smashing damage") { setSmashProc(smashProc + (proc.damage * .9)) }
      if (proc.damageType === "Lethal damage") { setLethalProc(lethalProc + (proc.damage * .9)) }
      if (proc.damageType === "Fire damage") { setFireProc(fireProc + (proc.damage * .9)) }
      if (proc.damageType === "Negative Energy damage") { setNegativeProc(negativeProc + (proc.damage * .9)) }
      if (proc.damageType === "Energy damage") { setEnergyProc(energyProc + (proc.damage * .9)) }
      if (proc.damageType === "Toxic damage") { setToxicProc(toxicProc + (proc.damage * .9)) }
      if (proc.damageType === "Psionic damage") { setPsionicProc(psionicProc + (proc.damage * .9)) }
    } else {
      if (proc.damageType === "Smashing damage") { setSmashProc(smashProc + (proc.damage * rate)) }
      if (proc.damageType === "Lethal damage") { setLethalProc(lethalProc + (proc.damage * rate)) }
      if (proc.damageType === "Fire damage") { setFireProc(fireProc + (proc.damage * rate)) }
      if (proc.damageType === "Negative Energy damage") { setNegativeProc(negativeProc + (proc.damage * rate)) }
      if (proc.damageType === "Energy damage") { setEnergyProc(energyProc + (proc.damage * rate)) }
      if (proc.damageType === "Toxic damage") { setToxicProc(toxicProc + (proc.damage * rate)) }
      if (proc.damageType === "Psionic damage") { setPsionicProc(psionicProc + (proc.damage * rate)) }
    }
  }
  const removeProcDamage = (rate) => {
    if (rate > .90) {
      if (proc.damageType === "Smashing damage") { setSmashProc(smashProc - (proc.damage * .9)) }
      if (proc.damageType === "Lethal damage") { setLethalProc(lethalProc - (proc.damage * .9)) }
      if (proc.damageType === "Fire damage") { setFireProc(fireProc - (proc.damage * .9)) }
      if (proc.damageType === "Negative Energy damage") { setNegativeProc(negativeProc - (proc.damage * .9)) }
      if (proc.damageType === "Energy damage") { setEnergyProc(energyProc - (proc.damage * .9)) }
      if (proc.damageType === "Toxic damage") { setToxicProc(toxicProc - (proc.damage * .9)) }
      if (proc.damageType === "Psionic damage") { setPsionicProc(psionicProc - (proc.damage * .9)) }
    } else {
      if (proc.damageType === "Smashing damage") { setSmashProc(smashProc - (proc.damage * rate)) }
      if (proc.damageType === "Lethal damage") { setLethalProc(lethalProc - (proc.damage * rate)) }
      if (proc.damageType === "Fire damage") { setFireProc(fireProc - (proc.damage * rate)) }
      if (proc.damageType === "Negative Energy damage") { setNegativeProc(negativeProc - (proc.damage * rate)) }
      if (proc.damageType === "Energy damage") { setEnergyProc(energyProc - (proc.damage * rate)) }
      if (proc.damageType === "Toxic damage") { setToxicProc(toxicProc - (proc.damage * rate)) }
      if (proc.damageType === "Psionic damage") { setPsionicProc(psionicProc - (proc.damage * rate)) }
    }
  }

  const updateDamage = async (rech) => {
    if (!checkBox) {
      if (proc.ppm === 5) {
        const newArr = attack
        newArr.slots.push(proc.name)
        setAttack(newArr)
        await setSlottedRecharge(parseFloat(rech + 23))
        aoe ? addProcDamage(procAOEBefore) : addProcDamage(procRateBefore)
      } else { aoe ? addProcDamage(procAOE) : addProcDamage(procRate) 
        const newArr = attack
        newArr.slots.push(proc.name)
        setAttack(newArr)
      }
    } else {
      const newArr = attack
      const procIndex = newArr.slots.indexOf(proc.name)
      newArr.slots.splice(procIndex, 1)
      setAttack(newArr)
      aoe ? removeProcDamage(procAOE) : removeProcDamage(procRate)
      if (proc.ppm === 5) {
        setSlottedRecharge(parseFloat(slottedRecharge - 23))
      }
    }
    setCheckBox(!checkBox)
  }

  useEffect(() => {
    setCheckBox(attack.slots.includes(proc.name))
  }, [setCheckBox, attack, proc])

  return (
    <Row>
      <Col xs={1}>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check value={true} checked={checkBox} type="checkbox" onChange={() => updateDamage(slottedRecharge)} />
        </Form.Group>
      </Col>
      <Col>{proc.name}</Col>
      <Col>{proc.ppm}</Col>
      {aoe ?
        <><Col>{procAOE > .90 ? "90%" : (procAOE * 100).toFixed(2) + "%"}</Col>
          <Col>{procAOE > .90 ? ((proc.damage * .9)).toFixed(2) : ((proc.damage * procAOE)).toFixed(2)}</Col></>
        :
        <><Col>{procRate > .90 ? "90%" : (procRate * 100).toFixed(2) + "%"}</Col>
          <Col>{procRate > .90 ? ((proc.damage * .9)).toFixed(2) : ((proc.damage * procRate)).toFixed(2)}</Col></>
      }
      <Col>{proc.damageType}</Col>
    </Row>

  )
}
