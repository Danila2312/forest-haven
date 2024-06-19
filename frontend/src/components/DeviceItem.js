import React, { useContext } from "react";
import { CiStar } from "react-icons/ci";
import { Button, Form, Row, Col, Card, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();

  return (
    <Col
      md={3}
      className="mt-4"
      onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
    >
      <Card
        className="d-flex  m-4"
        style={{ width: 200, cursor: "pointer" }}
        border="dark"
      >
        <Image width={200} height={150} src={device.img} />
        <div className="d-flex m-2 justify-content-between align-items-center">
          <div className="text-black-50">Тип дома</div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <CiStar />
          </div>
        </div>
        <div className="m-2">{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
