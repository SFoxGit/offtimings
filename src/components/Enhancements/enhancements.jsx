import React from 'react'
import procs from '../../data/procs'
import { Row, Col, Form } from 'react-bootstrap';
import { useState } from 'react';
import EnhancementSelector from './enhancement.selector';

export default function Enhancements(props) {
  const enhArr = props.enhArr
  const damage = props.damage
  const recharge = props.recharge
  const slottedRecharge = props.slottedRecharge
  const castTime = props.castTime 
  const radius = props.radius
  const arc = props.arc
  const procDamage = props.procDamage
  const setProcDamage = props.setProcDamage

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
          <EnhancementSelector procDamage={procDamage} setProcDamage={setProcDamage} radius={radius} arc={arc} castTime={castTime} recharge={recharge} slottedRecharge={slottedRecharge} damage={damage} proc={proc} />
        )
      }))}
    </>
  )
}
