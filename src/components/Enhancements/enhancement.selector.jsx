import React, { useState } from 'react'
import { useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

export default function EnhancementSelector(props) {
  const proc = props.proc
  const recharge = props.recharge
  const slottedRecharge = props.slottedRecharge
  // const setSlottedRecharge = props.setSlottedRecharge
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
  const setForced = props.setForced
  const forced = props.forced
  const setProcRech = props.setProcRech
  const procRech = props.procRech


  const procRate = parseFloat((recharge / (1 + (slottedRecharge + procRech) / 100) + castTime) * proc.ppm / 60)
  const procRateBefore = parseFloat((recharge / (1 + (slottedRecharge + procRech + 23) / 100) + castTime) * proc.ppm / 60)
  const procAOE = parseFloat(((recharge / (1 + (slottedRecharge + procRech) / 100) + castTime) * proc.ppm / (60 * (1 + (radius * (((11 * arc) + 540) / 40000))))))
  const procAOEBefore = parseFloat(((recharge / (1 + (slottedRecharge + procRech + 23) / 100) + castTime) * proc.ppm / (60 * (1 + (radius * (((11 * arc) + 540) / 40000))))))

  const addProcDamage = (rate) => {
      if (proc.damageType === "Smashing damage") {
        const procArr = smashProc
        procArr.push({name: proc.name, damage: parseFloat(proc.damage), ppm: proc.ppm})
        setSmashProc(procArr)
      }
      if (proc.damageType === "Lethal damage") {
        const procArr = lethalProc
        procArr.push({name: proc.name, damage: parseFloat(proc.damage), ppm: proc.ppm})
        setLethalProc(procArr)
      }
      if (proc.damageType === "Fire damage") {
        const procArr = fireProc
        procArr.push({name: proc.name, damage: parseFloat(proc.damage), ppm: proc.ppm})
        setFireProc(procArr)
      }
      if (proc.damageType === "Negative Energy damage") {
        const procArr = negativeProc
        procArr.push({name: proc.name, damage: parseFloat(proc.damage), ppm: proc.ppm})
        setNegativeProc(procArr)
      }
      if (proc.damageType === "Energy damage") {
        const procArr = energyProc
        procArr.push({name: proc.name, damage: parseFloat(proc.damage), ppm: proc.ppm})
        setEnergyProc(procArr)
      }
      if (proc.damageType === "Toxic damage") {
        const procArr = toxicProc
        procArr.push({name: proc.name, damage: parseFloat(proc.damage), ppm: proc.ppm})
        setToxicProc(procArr)
      }
      if (proc.damageType === "Psionic damage") {
        const procArr = psionicProc
        procArr.push({name: proc.name, damage: parseFloat(proc.damage), ppm: proc.ppm})
        setPsionicProc(procArr)
      }
  }
  const removeProcDamage = (rate) => {
      if (proc.damageType === "Smashing damage") { 
        const procArr = smashProc
        procArr.forEach((x, index) => {
          if (x.name === proc.name) {procArr.splice(index, 1)}
        })
        setSmashProc(procArr)
      }
      if (proc.damageType === "Lethal damage") { 
        const procArr = lethalProc
         procArr.forEach((x, index) => {
          if (x.name === proc.name) {procArr.splice(index, 1)}
        })
        setLethalProc(procArr)
      }
      if (proc.damageType === "Fire damage") { 
        const procArr = fireProc
         procArr.forEach((x, index) => {
          if (x.name === proc.name) {procArr.splice(index, 1)}
        })
        setFireProc(procArr)
      }
      if (proc.damageType === "Negative Energy damage") { 
        const procArr = negativeProc
        procArr.forEach((x, index) => {
          if (x.name === proc.name) {procArr.splice(index, 1)}
        })
        setNegativeProc(procArr)
      }
      if (proc.damageType === "Energy damage") { 
        const procArr = energyProc
         procArr.forEach((x, index) => {
          if (x.name === proc.name) {procArr.splice(index, 1)}
        })
        setEnergyProc(procArr)
      }
      if (proc.damageType === "Toxic damage") { 
        const procArr = toxicProc
         procArr.forEach((x, index) => {
          if (x.name === proc.name) {procArr.splice(index, 1)}
        })
        setToxicProc(procArr)
      }
      if (proc.damageType === "Psionic damage") { 
        const procArr = psionicProc
         procArr.forEach((x, index) => {
          if (x.name === proc.name) {procArr.splice(index, 1)}
        })
        setPsionicProc(procArr)
      }
  }

  const updateDamage = async (rech) => {
    if (!checkBox) {
      if (proc.ppm === 5) {
        const newArr = attack
        newArr.slots.push(proc.name)
        newArr.slottedRecharge += 23
        setAttack(newArr)
        setProcRech(parseFloat(rech + 23))
        aoe ? addProcDamage(procAOEBefore) : addProcDamage(procRateBefore)
      } else {
        aoe ? addProcDamage(procAOE) : addProcDamage(procRate)
        const newArr = attack
        newArr.slots.push(proc.name)
        setAttack(newArr)
      }
    } else {
      if (proc.ppm === 5) {
        const newArr = attack
        const procIndex = newArr.slots.indexOf(proc.name)
        newArr.slots.splice(procIndex, 1)
        newArr.slottedRecharge -= 23
        setAttack(newArr)
        aoe ? removeProcDamage(procAOE) : removeProcDamage(procRate)
        setProcRech(parseFloat(procRech - 23))
      } else {
        const newArr = attack
        const procIndex = newArr.slots.indexOf(proc.name)
        newArr.slots.splice(procIndex, 1)
        setAttack(newArr)
        aoe ? removeProcDamage(procAOE) : removeProcDamage(procRate)
      }
    }
    setCheckBox(!checkBox)
    setForced(!forced)
  }

  useEffect(() => {
    setCheckBox(attack.slots.includes(proc.name))
  }, [setCheckBox, attack, proc])

  return (
    <Row>
      <Col className="mb-3 d-flex justify-content-center" xs={1}>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check value={true} checked={checkBox} type="checkbox" onChange={() => updateDamage(procRech)} />
        </Form.Group>
      </Col>
      <Col className="text-center">{proc.name}</Col>
      <Col className="text-center">{proc.ppm}</Col>
      {aoe ?
        <><Col className="text-center">{procAOE > .90 ? "90%" : (procAOE * 100).toFixed(2) + "%"}</Col>
          <Col className="text-center">{procAOE > .90 ? ((proc.damage * .9)).toFixed(2) : ((proc.damage * procAOE)).toFixed(2)}</Col></>
        :
        <><Col className="text-center">{procRate > .90 ? "90%" : (procRate * 100).toFixed(2) + "%"}</Col>
          <Col className="text-center">{procRate > .90 ? ((proc.damage * .9)).toFixed(2) : ((proc.damage * procRate)).toFixed(2)}</Col></>
      }
      <Col className="text-center">{proc.damageType}</Col>
    </Row>

  )
}
