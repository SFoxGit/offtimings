import React, { useEffect, useState } from 'react'
import attacks from '../../data'
import Table from 'react-bootstrap/Table';
import { Container, Row, Button, Col } from 'react-bootstrap';

export default function AttacksTable() {
  const [powers, setPowers] = useState([])
  const [archtype, setArchtype] = useState()

  const selectArchtype = (filter) => {
    console.log(filter)
    let arr = attacks.filter(function(power) {
      return power[13].includes(filter)
    })
    console.log(arr)
    setPowers(arr)
  }
  useEffect(() => {
    setPowers(attacks)
  }, [setPowers])
  return (
    <Container>
      <Row>
        <Col>
          <Button size="lg" variant="primary" onClick={() => selectArchtype("blaster")}>Blaster</Button>
          <Button size="lg" variant="primary" onClick={() => selectArchtype("corruptor")}>Corruptor</Button>
          <Button size="lg" variant="primary" onClick={() => selectArchtype("defender")}>Defender</Button>
          <Button size="lg" variant="primary" onClick={() => selectArchtype("dom")}>Dom</Button>
          <Button size="lg" variant="primary" onClick={() => selectArchtype("controller")}>Controller</Button>
        </Col>
      </Row>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Power</th>
            <th>Effect Time</th>
            <th>Projectile Speed</th>
            <th>True Cast Time</th>
            <th>Set</th>
            <th>Range</th>
            <th>Time of Damage</th>
            <th>Required Follow Up</th>
          </tr>
        </thead>
        <tbody>
          {powers.map(power => (
            <tr key={power[0]}>
              <td>{power[0]}</td>
              <td>{power[3]}</td>
              <td>{power[4]}</td>
              <td>{power[7]}</td>
              <td>{power[8]}</td>
              <td>{power[9]}</td>
              <td>{power[10]}</td>
              <td>{power[11]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}
