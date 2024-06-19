import React from "react";
import { Button, Form, Row, Col, Card, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";


const DevicePage = () => {
  const device = {id: 1, name: "A-Frame в глухом лесу", price: 14000, rating: 4, img:'0731a54a-3640-402c-a35d-9bb26b0d434d.jpg'}

  return (
    <Container>
      <Col md={4}>
      <Image width={300} src={device.img}/>

      </Col>

      <Col md={4}>
      
      </Col>

      <Col md={4}>
      
      </Col>
    </Container>

    
    
  )
}

export default DevicePage;