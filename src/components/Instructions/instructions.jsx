import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Instructions() {
  return (
    <Container>
      <Row><h2 style={{color: "black"}} className="text-center mt-4 fw-bolder">Instructions</h2></Row>
      <Row className="mt-4 instructions">Get an understanding of when you usually fire and at what distance, from one of Xhiggy's datastudios reports. I suggest looking into the spikes table.</Row>
      <Row className="mt-4 instructions">If you're looking for a new attack chain, please understand the attack chain of your teammates. A fire/plant chain hits at 1.73 seconds, if you're hitting at 2.73, that's a full second you're giving the target to hit greens or receive heals.</Row>
      <Row className="mt-4 instructions">You can sort the table by clicking on the table headers</Row>
      <Row className="mt-4 instructions">You can filter the table by clicking on the Archtype/Primary/Secondary/Epic buttons</Row>
      <Row className="mt-4 instructions">If you click on a power, it will be added to your attack chain table at your current distance.</Row>
      <Row className="mt-4 instructions">Changing the Distance From Target will update the table below, and set that as your new default distance</Row>
      <Row className="mt-4 instructions">You can update the distance fired in your attack chain table to see how distance is impacting your hit timing, again take note from Xhiggy's reports what your typical distances are.</Row>
      <Row className="mt-4 instructions">If you typically don't fire right on 0 in the spike logs you can update the "Late by" number EG 0.33</Row>
      <Row className="mt-4 instructions">Sometimes you'll be late because you're coming back from evasion, knowing how to vary your chain based on the situation is key to being effective on spike. (A 130ft Blaze thrown 1 second late is hitting at 3 seconds, but Blazing Bolt would hit at 2 seconds)</Row>
      <Row className="mt-4 instructions"><p className="text-center">Special thanks to <span style={{color: "blue", fontWeight: "bolder"}}>Mallex</span> for help with understanding how the server ticks and combat ticks work.</p></Row>
      <Row className="my-4 instructions d-flex justify-content-center fw-bolder">-Dexington</Row>

      <Row><h2 style={{color: "black"}} className="text-center mt-4 fw-bolder">Definitions</h2></Row>
      <Row className="mt-4 instructions">
        <Col className="fw-bolder" xs={3} md={3}>Power</Col>
        <Col xs={9} md={9}>The power's name</Col>
      </Row>
      <Row className="mt-4 instructions">
        <Col className="fw-bolder" xs={3} md={3}>Effect Time</Col>
        <Col xs={9} md={9}>Time after activation the projectile begins to travel, this factors in server ticks</Col>
      </Row>
      <Row className="mt-4 instructions">
        <Col className="fw-bolder" xs={3} md={3}>Projectile Speed</Col>
        <Col xs={9} md={9}>ft/second the attack travels at</Col>
      </Row>
      <Row className="mt-4 instructions">
        <Col className="fw-bolder" xs={3} md={3}>True Cast Time</Col>
        <Col xs={9} md={9}>The amount of time required to be able to cast another ability. This calculates in the dead tick along with server tick rate.</Col>
      </Row>
      <Row className="mt-4 instructions">
        <Col className="fw-bolder" xs={3} md={3}>Set</Col>
        <Col xs={9} md={9}>Powerset the power belongs to</Col>
      </Row>
      <Row className="mt-4 instructions">
        <Col className="fw-bolder" xs={3} md={3}>Range</Col>
        <Col xs={9} md={9}>Base range of the power (not very important for this calculator)</Col>
      </Row>
      <Row className="mt-4 instructions">
        <Col className="fw-bolder" xs={3} md={3}>Time of Damage</Col>
        <Col xs={9} md={9}>The time from activation to damage impact factoring in projectile speed and distance.</Col>
      </Row>
      <Row className="mt-4 instructions">
        <Col className="fw-bolder" xs={3} md={3}>Required Follow Up</Col>
        <Col xs={9} md={9}>If you were looking for a second attack to line up with this attack, the Req Follow Up of the first attack would be the Time of Damage you'd want to look for in the second attack. So a negative value RFU means it's impossible to throw an attack after it and have it hit at the same time. Penetrating Ray at 90ft has a RFU of 0.701 so looking for an attack near 0.701 Time of Damage we find Lancer Shot at 0.799.</Col>
      </Row>
      <Row className="mt-4 instructions"></Row>
    </Container>
  )
}
