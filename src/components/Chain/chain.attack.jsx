import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import modifiers from '../../modifiers';
import Enhancements from '../Enhancements/enhancements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default function ChainAttack(props) {
  const [attack, setAttack] = useState(props.attack)
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
  const [smashProc, setSmashProc] = useState([])
  const [lethalProc, setLethalProc] = useState([])
  const [fireProc, setFireProc] = useState([])
  const [negativeProc, setNegativeProc] = useState([])
  const [energyProc, setEnergyProc] = useState([])
  const [toxicProc, setToxicProc] = useState([])
  const [psionicProc, setPsionicProc] = useState([])
  const [smashDamage, setSmashDamage] = useState(0)
  const [lethalDamage, setLethalDamage] = useState(0)
  const [fireDamage, setFireDamage] = useState(0)
  const [coldDamage, setColdDamage] = useState(0)
  const [negativeDamage, setNegativeDamage] = useState(0)
  const [energyDamage, setEnergyDamage] = useState(0)
  const [toxicDamage, setToxicDamage] = useState(0)
  const [psionicDamage, setPsionicDamage] = useState(0)
  const [smashDamageTick, setSmashDamageTick] = useState(0)
  const [lethalDamageTick, setLethalDamageTick] = useState(0)
  const [fireDamageTick, setFireDamageTick] = useState(0)
  const [coldDamageTick, setColdDamageTick] = useState(0)
  const [negativeDamageTick, setNegativeDamageTick] = useState(0)
  const [energyDamageTick, setEnergyDamageTick] = useState(0)
  const [toxicDamageTick, setToxicDamageTick] = useState(0)
  const [psionicDamageTick, setPsionicDamageTick] = useState(0)
  const [modDamage, setModDamage] = useState(0)
  const [modDamageTick, setModDamageTick] = useState(0)
  const [tickDuration, setTickDuration] = useState(0)
  const [slottedRecharge, setSlottedRecharge] = useState(0)
  const [showDamage, setShowDamage] = useState(false)
  const [procRech, setProcRech] = useState(0)
  const chev = !showDamage ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />
  const rem = <FontAwesomeIcon icon={faTimesCircle} />
  // const procRate = ((attack.recharge / (1 + attack.slottedRecharge) + (attack.castTime)) * 3.5 / 60 * 100).toFixed(2)
  // const procAOE = (((attack.recharge / (1 + attack.slottedRecharge) + attack.castTime) * 3.5 / (60 * (1 + (attack.radius * (((11 * attack.arc) + 540) / 40000))))) * 100).toFixed(2)
  let damageBonus = attack.bonusDamage || 123
  var x = window.matchMedia("(max-width: 700px)")

  const updateDistance = (newDistance, index) => {
    let newArr = attackChain;
    newArr[index].distance = newDistance
    setAttackChain(newArr)
    setForced(!forced)
  }
  const updateRechargeSlotting = (newRecharge) => {
    let newArr = attackChain;
    newArr[index].slottedRecharge = newRecharge
    setAttackChain(newArr)
    setSlottedRecharge(parseFloat(newRecharge))
    setForced(!forced)
    return forced
  }
  const updateNewRecharge = (newRecharge) => {
    setSlottedRecharge(parseFloat(newRecharge - procRech))
  }
  const updateBonus = (newBonus, index) => {
    let newArr = attackChain;
    newArr[index].bonusDamage = newBonus
    setAttackChain(newArr)
    setForced(!forced)
  }

  const removeAttack = (index) => {
    let newArr = attackChain;
    newArr[index].slots = []
    newArr[index].slottedRecharge = 0
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
    } else {
      const tickIndex = attack.damage.indexOf('tick')
      let smashDamagio = 0
      let lethalDamagio = 0
      let energyDamagio = 0
      let negDamagio = 0
      let fireDamagio = 0
      let coldDamagio = 0
      let toxicDamagio = 0
      let psionicDamagio = 0
      for (var i = 0; i < tickIndex + 1; i++) {
        if (i === tickIndex) {
          let dam = attack.damage[i + 1]
          const duration = attack.damage[i + 2]
          const rate = attack.damage[i + 3]
          const ticks = Math.floor(duration / rate)
          let tickDam = ticks * attack.damage[i + 1]
          setTickDuration(duration)
          if (archtype === "blaster") { dam = dam * modifiers.blaster; tickDam = tickDam * modifiers.blaster }
          if (archtype === "corruptor") { dam = dam * modifiers.corruptor; tickDam = tickDam * modifiers.corruptor }
          if (archtype === "defender") { dam = dam * modifiers.defender; tickDam = tickDam * modifiers.defender }
          if (archtype === "controller") { dam = dam * modifiers.controller; tickDam = tickDam * modifiers.controller }
          if (archtype === "dom") { dam = dam * modifiers.dom; tickDam = tickDam * modifiers.dom }
          if (attack.damageType[i] === "Smashing_Dmg") { setSmashDamage(smashDamagio + dam); setSmashDamageTick(smashDamageTick + tickDam); }
          if (attack.damageType[i] === "Lethal_Dmg") { setLethalDamage(lethalDamagio + dam); setLethalDamageTick(lethalDamageTick + tickDam); }
          if (attack.damageType[i] === "Energy_Dmg") { setEnergyDamage(energyDamagio + dam); setEnergyDamageTick(energyDamageTick + tickDam); }
          if (attack.damageType[i] === "Negative_Energy_Dmg") { setNegativeDamage(negDamagio + dam); setNegativeDamageTick(negativeDamageTick + tickDam); }
          if (attack.damageType[i] === "Fire_Dmg") { setFireDamage(fireDamagio + dam); setFireDamageTick(fireDamageTick + tickDam); }
          if (attack.damageType[i] === "Cold_Dmg") { setColdDamage(coldDamagio + dam); setColdDamageTick(coldDamageTick + tickDam); }
          if (attack.damageType[i] === "Toxic_Dmg") { setToxicDamage(toxicDamagio + dam); setToxicDamageTick(toxicDamageTick + tickDam); }
          if (attack.damageType[i] === "Psionic_Dmg") { setPsionicDamage(psionicDamagio + dam); setPsionicDamageTick(psionicDamageTick + tickDam); }
        } else {
          let dam = attack.damage[i]
          if (archtype === "blaster") { dam = dam * modifiers.blaster }
          if (archtype === "corruptor") { dam = dam * modifiers.corruptor }
          if (archtype === "defender") { dam = dam * modifiers.defender }
          if (archtype === "controller") { dam = dam * modifiers.controller }
          if (archtype === "dom") { dam = dam * modifiers.dom }
          if (attack.damageType[i] === "Smashing_Dmg") { smashDamagio = (smashDamage + dam) }
          if (attack.damageType[i] === "Lethal_Dmg") { lethalDamagio = (lethalDamage + dam) }
          if (attack.damageType[i] === "Energy_Dmg") { energyDamagio = (energyDamage + dam) }
          if (attack.damageType[i] === "Negative_Energy_Dmg") { negDamagio = (negativeDamage + dam) }
          if (attack.damageType[i] === "Fire_Dmg") { fireDamagio = (fireDamage + dam) }
          if (attack.damageType[i] === "Cold_Dmg") { coldDamagio = (coldDamage + dam) }
          if (attack.damageType[i] === "Toxic_Dmg") { toxicDamagio = (toxicDamage + dam) }
          if (attack.damageType[i] === "Psionic_Dmg") { psionicDamagio = (psionicDamage + dam) }
        }

      }
    }
  }
  const baseDamage = (smashDamage + lethalDamage + energyDamage + negativeDamage + fireDamage + coldDamage + toxicDamage + psionicDamage)

  useEffect(() => {
    calcDamage()
    setSlottedRecharge(attack.slottedRecharge)
  }, [])

  useEffect(() => {
    const totalDamagePerType = (base, proc, resist) => {
      let procDamage = 0;
      if (proc.length) {
        if (attack.aoe) {
          proc.forEach(procArr => {
            const procAOE = parseFloat(((attack.recharge / (1 + (slottedRecharge + procRech) / 100) + attack.castTime) * procArr.ppm / (60 * (1 + (attack.radius * (((11 * attack.arc) + 540) / 40000))))))
            if (procAOE > 0.9) {
              procDamage += (procArr.damage * 0.9)
            } else {
              procDamage += (procArr.damage * procAOE)
            }
          })
        } else {
          proc.forEach(procArr => {
            const procRate = parseFloat((attack.recharge / (1 + (slottedRecharge + procRech) / 100) + attack.castTime) * parseFloat(procArr.ppm) / 60)
            if (procRate > 0.9) { procDamage += (parseFloat(procArr.damage) * 0.9) } else { procDamage += (parseFloat(procArr.damage) * procRate) }
          })
        }
      }
      const calculation = (((base * (1 + (((damageBonus) / 100) * (1 - Math.atan(((damageBonus) / 100) * 0.33) * 2 / Math.PI * 0.8)))) + procDamage) * (1 - resist))
      return calculation
    }
    setModDamage(totalDamagePerType(smashDamage, smashProc, smashingLethal) + totalDamagePerType(lethalDamage, lethalProc, smashingLethal) + totalDamagePerType(energyDamage, energyProc, energyNegative) + totalDamagePerType(negativeDamage, negativeProc, energyNegative) + totalDamagePerType(fireDamage, fireProc, fireCold) + totalDamagePerType(coldDamage, 0, fireCold) + totalDamagePerType(toxicDamage, toxicProc, toxicPsionic) + totalDamagePerType(psionicDamage, psionicProc, toxicPsionic))
    setModDamageTick(totalDamagePerType(smashDamageTick, 0, smashingLethal) + totalDamagePerType(lethalDamageTick, 0, smashingLethal) + totalDamagePerType(energyDamageTick, 0, energyNegative) + totalDamagePerType(negativeDamageTick, 0, energyNegative) + totalDamagePerType(fireDamageTick, 0, fireCold) + totalDamagePerType(coldDamageTick, 0, fireCold) + totalDamagePerType(toxicDamageTick, 0, toxicPsionic) + totalDamagePerType(psionicDamageTick, 0, toxicPsionic))

  }, [procRech, slottedRecharge, forced, attack, lethalDamageTick, energyDamageTick, negativeDamageTick, fireDamageTick, coldDamageTick, toxicDamageTick, psionicDamageTick, smashDamageTick, damageBonus, smashDamage, smashProc, smashingLethal, lethalDamage, lethalProc, energyDamage, energyProc, negativeDamage, negativeProc, energyNegative, fireDamage, fireProc, coldDamage, fireCold, toxicDamage, toxicProc, psionicDamage, psionicProc, toxicPsionic])
  return (
    <div key={"chain" + attack.name}>
      <Row className="mt-2 border-bottom d-flex align-items-center chain" key={"chainHeader" + attack.name}>
        <Col className="p-2 text-center">{attack.name}</Col>
        <Col className="p-2 text-center">{(totalCast).toFixed(3)}</Col>
        <Col className="p-2 d-flex justify-content-center"><input className="text-center w-75 btnShadow" defaultValue={attack.distance} onChange={e => updateDistance(e.target.value, index)}></input></Col>
        <Col className="p-2 text-center">{(totalCast + attack.effectSeconds + attack.distance / attack.speed).toFixed(3)}</Col>
        {/* {attack.aoe ? <Col className="p-2 text-center">{procAOE < 90 ? procAOE + '%' : 90 + '%'}</Col> : <Col className="p-2 text-center">{procRate < 90 ? procRate + '%' : 90 + '%'}</Col>} */}
        <Col className="p-2 text-center d-flex justify-content-center align-items-center"><Button className="fw-bold w-75 text-center remove" variant="danger" onClick={() => setShowDamage(!showDamage)}>{x.matches ? chev : "Damage"}</Button></Col>
        <Col className="p-2 text-center d-flex justify-content-center align-items-center"><Button className="fw-bold w-75 text-center remove" variant="danger" onClick={() => removeAttack(index)}>{x.matches ? rem : "Remove"}</Button></Col>
      </Row>
      {showDamage ?
        <>
          <Row className="mt-2 d-flex align-items-center chain">
            <Col className="p-2 text-center">Slotted Recharge</Col>
            <Col className="p-2 text-center">Damage Bonus</Col>
            {x.matches ? null : <Col className="p-2 text-center">Base Damage</Col>}
            <Col className="p-2 text-center">Mod Damage</Col>
            <Col className="p-2 text-center">Total Tick Damage</Col>
            {x.matches ? null : <Col className="p-2 text-center">Tick Duration</Col>}
          </Row>
          <Row className="border-bottom d-flex align-items-center chain">
            <Col key={"recharge" + index + procRech} className="p-2 d-flex justify-content-center"><input className="text-center w-50 btnShadow" defaultValue={slottedRecharge + procRech} onChange={e => updateRechargeSlotting(e.target.value)} onBlur={e => updateNewRecharge(e.target.value)}></input></Col>
            <Col className="p-2 d-flex justify-content-center"><input className="text-center w-50 btnShadow" defaultValue={damageBonus} onChange={e => updateBonus(e.target.value, index)}></input></Col>
            {x.matches ? null : <Col className="p-2 text-center d-flex justify-content-center align-items-center">{baseDamage.toFixed(2)}</Col>}
            <Col key={"dam" + index + slottedRecharge} className="p-2 text-center d-flex justify-content-center align-items-center">{modDamage.toFixed(2)}</Col>
            <Col className="p-2 text-center d-flex justify-content-center align-items-center">{modDamageTick.toFixed(2)}</Col>
            {x.matches ? null : <Col className="p-2 text-center d-flex justify-content-center align-items-center">{tickDuration}</Col>}
          </Row>
          <Enhancements
            key={"enhancements" + index + slottedRecharge}
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
            attack={attack}
            setAttack={setAttack}
            castTime={attack.castTime}
            recharge={attack.recharge}
            slottedRecharge={slottedRecharge}
            setSlottedRecharge={setProcRech}
            enhArr={attack.enhancements}
            setForced={setForced}
            forced={forced}
            setProcRech={setProcRech}
            procRech={procRech}
          />
        </>
        :
        null}
    </div>
  )
}
