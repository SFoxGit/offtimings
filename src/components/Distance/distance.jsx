import React from 'react'
import RangeSlider from 'react-bootstrap-range-slider'
import { Row, Col, Form } from 'react-bootstrap';

export default function Distance(props) {
  const distance = props.distance
  const setDistance = props.setDistance
  return (
    <Form>
      <Form.Group>
        <Row className="justify-content-around mt-3 bg-dark p-3 text-white fw-bolder customBoxShadow">
            <Form.Label>Distance From Target: </Form.Label>
          <Col xs={11}>
            <RangeSlider
              value={distance}
              min={1}
              max={175}
              size="lg"
              onChange={e => setDistance(e.target.value)}
            />
          </Col>
          <Col xs={1}  className="d-flex align-items-center">
            <Form.Control value={distance} onChange={e => setDistance(e.target.value)} />
          </Col>
        </Row>
      </Form.Group>
    </Form>
  )
}
