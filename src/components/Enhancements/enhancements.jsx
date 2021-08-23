import React from 'react'
import procs from '../../data/procs'
import { Row, Col, Form }
  from 'react-bootstrap';
import { useState }
  from 'react';
import EnhancementSelector from './enhancement.selector';

export default function Enhancements(props) {
  const enhArr = props.enhArr
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

  return (
    <>
      <Row>
        <Col>Add</Col>
        <Col>Proc</Col>
        <Col>PPM</Col>
        <Col>Damage</Col>
        <Col>Type</Col>
      </Row>
      {enhArr.map(type => procs[type].map(proc => {
        return (
          <EnhancementSelector
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
            proc={proc}
          />
        )
      }))}
    </>
  )
}
