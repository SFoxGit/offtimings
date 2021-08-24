import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import modifiers from '../../modifiers';
import Enhancements from '../Enhancements/enhancements';

export default function ChainAttack(props) {
  const attack = props.attack
  const totalCast = props.totalCast
  const archtype = props.archtype
  const attackChain = props.attackChain
  const setAttackChain = props.setAttackChain
  const setForced = props.setForced
  const forced = props.forced
  const index = props.index
  const smashingLethal = props.smashingLethal
  const fireCold = props.fireCold
  const energyNegative = props.energyNegative
  const toxicPsionic = props.toxicPsionic
  const [smashProc, setSmashProc] = useState(0)
  const [lethalProc, setLethalProc] = useState(0)
  const [fireProc, setFireProc] = useState(0)
  const [negativeProc, setNegativeProc] = useState(0)
  const [energyProc, setEnergyProc] = useState(0)
  const [toxicProc, setToxicProc] = useState(0)
  const [psionicProc, setPsionicProc] = useState(0)
  const [smashDamage, setSmashDamage] = useState(0)
  const [lethalDamage, setLethalDamage] = useState(0)
  const [fireDamage, setFireDamage] = useState(0)
  const [coldDamage, setColdDamage] = useState(0)
  const [negativeDamage, setNegativeDamage] = useState(0)
  const [energyDamage, setEnergyDamage] = useState(0)
  const [toxicDamage, setToxicDamage] = useState(0)
  const [psionicDamage, setPsionicDamage] = useState(0)
  const [modDamage, setModDamage] = useState(0)
  const procRate = ((attack.recharge / (1 + attack.slottedRecharge) + (attack.castTime)) * 3.5 / 60 * 100).toFixed(2)
  const procAOE = (((attack.recharge / (1 + attack.slottedRecharge) + attack.castTime) * 3.5 / (60 * (1 + (attack.radius * (((11 * attack.arc) + 540) / 40000))))) * 100).toFixed(2)
  let damageBonus = attack.bonusDamage || 123
  var x = window.matchMedia("(max-width: 700px)")

  const updateDistance = (newDistance, index) => {
    let newArr = attackChain;
    newArr[index].distance = newDistance
    setAttackChain(newArr)
    setForced(!forced)
  }
  const updateRechargeSlotting = (newRecharge, index) => {
    let newArr = attackChain;
    newArr[index].slottedRecharge = newRecharge
    setAttackChain(newArr)
    setForced(!forced)
  }
  const updateBonus = (newBonus, index) => {
    let newArr = attackChain;
    newArr[index].bonusDamage = newBonus
    setAttackChain(newArr)
    setForced(!forced)
  }

  const removeAttack = (index) => {
    let newArr = attackChain;
    newArr.splice(index, 1)
    setAttackChain(newArr)
    setForced(!forced)
  }
  const calcDamage = () => {

    if (!attack.damage.includes("tick")) {
      attack.damage.forEach((dam, index) => {
        // let damage = 0;
        // damage += dam
        if (archtype === "blaster") { dam = dam * modifiers.blaster }
        if (archtype === "corruptor") { dam = dam * modifiers.corruptor }
        if (archtype === "defender") { dam = dam * modifiers.defender }
        if (archtype === "controller") { dam = dam * modifiers.controller }
        if (archtype === "dom") { dam = dam * modifiers.dom }
        if (attack.damageType[index] === "Smashing_Dmg") { setSmashDamage(smashDamage + dam) }
        if (attack.damageType[index] === "Lethal_Dmg") { setLethalDamage(lethalDamage + dam) }
        if (attack.damageType[index] === "Energy_Dmg") { setEnergyDamage(energyDamage + dam) }
        if (attack.damageType[index] === "Negative_Energy_Dmg") { setNegativeDamage(negativeDamage + dam) }
        if (attack.damageType[index] === "Fire_Dmg") { setFireDamage(fireDamage + dam) }
        if (attack.damageType[index] === "Cold_Dmg") { setColdDamage(coldDamage + dam) }
        if (attack.damageType[index] === "Toxic_Dmg") { setToxicDamage(toxicDamage + dam) }
        if (attack.damageType[index] === "Psionic_Dmg") { setPsionicDamage(psionicDamage + dam) }
      })
    }
  }
  console.log("res: " + energyNegative)
  console.log("baseDam: " + energyDamage)
  const baseDamage = (smashDamage + lethalDamage + energyDamage + negativeDamage + fireDamage + coldDamage + toxicDamage + psionicDamage)

  useEffect(() => {
    calcDamage()
    console.log("Final Mod Damage: " + modDamage)
  }, [])

  useEffect(() => {
    const totalDamagePerType = (base, proc, resist) => {
      console.log("base: " + base)
      console.log("proc: " + proc)
      console.log("resist: " + resist)
      const calculation = (((base * (1 + (((damageBonus) / 100) * (1 - Math.atan(((damageBonus) / 100) * 0.33) * 2 / Math.PI * 0.8)))) + proc) * (1 - resist))
      console.log("calculation: " + calculation)
      return calculation
    }
    setModDamage(totalDamagePerType(smashDamage, smashProc, smashingLethal) + totalDamagePerType(lethalDamage, lethalProc, smashingLethal) + totalDamagePerType(energyDamage, energyProc, energyNegative) + totalDamagePerType(negativeDamage, negativeProc, energyNegative) + totalDamagePerType(fireDamage, fireProc, fireCold) + totalDamagePerType(coldDamage, 0, fireCold) + totalDamagePerType(toxicDamage, toxicProc, toxicPsionic) + totalDamagePerType(psionicDamage, psionicProc, toxicPsionic))

  }, [damageBonus, smashDamage, smashProc, smashingLethal, lethalDamage, lethalProc, energyDamage, energyProc, negativeDamage, negativeProc, energyNegative, fireDamage, fireProc, coldDamage, fireCold, toxicDamage, toxicProc, psionicDamage, psionicProc, toxicPsionic])
  return (
    <Row key={"chain" + attack.name}>
      <Row className="mt-2 border-bottom d-flex align-items-center chain" key={"chainHeader" + attack.name}>
        <Col className="p-2 text-center">{attack.name}</Col>
        <Col className="p-2 text-center">{(totalCast).toFixed(3)}</Col>
        <Col className="p-2 d-flex justify-content-center"><input className="text-center w-50" defaultValue={attack.distance} onChange={e => updateDistance(e.target.value, index)}></input></Col>
        <Col className="p-2 text-center">{(totalCast + attack.effectSeconds + attack.distance / attack.speed).toFixed(3)}</Col>
        {/* {attack.aoe ? <Col className="p-2 text-center">{procAOE < 90 ? procAOE + '%' : 90 + '%'}</Col> : <Col className="p-2 text-center">{procRate < 90 ? procRate + '%' : 90 + '%'}</Col>} */}
        <Col className="p-2 text-center d-flex justify-content-center align-items-center">{baseDamage.toFixed(2)}</Col>
        <Col className="p-2 text-center d-flex justify-content-center align-items-center"><Button className="fw-bolder text-dark w-75 text-center remove" variant="danger" onClick={() => removeAttack(index)}>{x.matches ? "X" : "Remove"}</Button></Col>
      </Row>
      <Row className="mt-2 d-flex align-items-center chain">
      <Col className="p-2 text-center">Slotted Recharge</Col>
      <Col className="p-2 text-center">Damage Bonus</Col>
      <Col className="p-2 text-center">Mod Damage</Col>

      </Row>
      <Row className="mt-2 border-bottom d-flex align-items-center chain">
        <Col className="p-2 d-flex justify-content-center"><input className="text-center w-50" defaultValue={attack.slottedRecharge} onChange={e => updateRechargeSlotting(e.target.value, index)}></input></Col>
        <Col className="p-2 d-flex justify-content-center"><input className="text-center w-50" defaultValue={damageBonus} onChange={e => updateBonus(e.target.value, index)}></input></Col>
        <Col className="p-2 text-center d-flex justify-content-center align-items-center">{modDamage.toFixed(2)}</Col>

      </Row>
      <Enhancements
        index={index}
        archtype={archtype}
        aoe={attack.aoe}
        smashProc={smashProc}
        lethalProc={lethalProc}
        fireProc={fireProc}
        negativeProc={negativeProc}
        energyProc={energyProc}
        toxicProc={toxicProc}
        psionicProc={psionicProc}
        setSmashProc={setSmashProc}
        setLethalProc={setLethalProc}
        setFireProc={setFireProc}
        setNegativeProc={setNegativeProc}
        setEnergyProc={setEnergyProc}
        setToxicProc={setToxicProc}
        setPsionicProc={setPsionicProc}
        radius={attack.radius}
        arc={attack.arc}
        castTime={attack.castTime}
        recharge={attack.recharge}
        slottedRecharge={attack.slottedRecharge}
        enhArr={attack.enhancements}
      />
    </Row>
  )
}
