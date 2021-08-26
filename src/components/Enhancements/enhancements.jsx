import React from 'react'
import procs from '../../data/procs'
import { Row, Col } from 'react-bootstrap';
import EnhancementSelector from './enhancement.selector';

export default function Enhancements(props) {
  const index = props.index
  const enhArr = props.enhArr
  const recharge = props.recharge
  const slottedRecharge = props.slottedRecharge
  const setSlottedRecharge = props.setSlottedRecharge
  const castTime = props.castTime
  const radius = props.radius
  const arc = props.arc
  const aoe = props.aoe
  const archtype = props.archtype
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

  return (
    <Row key={"procs" + index}>
      <Row key={"procHeaders" + index}>
        <Col xs={1}>Add</Col>
        <Col>Proc</Col>
        <Col>PPM</Col>
        <Col>Rate</Col>
        <Col>Damage*Rate</Col>
        <Col>Type</Col>
      </Row>
      {enhArr.map(type => procs[type].map((proc, index) => {
        if (archtype !== "blaster" && proc.name === "Superior Blasters Wrath") return null
        if (archtype !== "corruptor" && proc.name === "Superior Malice of the Corruptor") return null
        if (archtype !== "defender" && proc.name === "Superior Defender's Bastion") return null
        if (archtype !== "defender" && proc.name === "Superior Vigilant Assault") return null
        return (
          <EnhancementSelector
            key={"eachEnhance" + index}
            aoe={aoe}
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
            radius={radius}
            arc={arc}
            castTime={castTime}
            recharge={recharge}
            slottedRecharge={slottedRecharge}
            setSlottedRecharge={setSlottedRecharge}
            proc={proc}
          />
        )
      }))}
    </Row>
  )
}
