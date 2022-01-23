import React, { useState } from "react";
import { Button, Col, Row, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/AddCart.css";

const AddCart = () => {
  const [storedNum, setStoredNum] = useState(0);
  return (
    <div>
      <Row>
        <Col lg={12}>
          <InputGroup className="mb-3">
            <Button onClick={() => setStoredNum(storedNum - 1)} variant="primary">-</Button>
            <FormControl
              type="text"
              value={storedNum}
              className="text-center"
              disabled
              id="amount"
            />
            <Button onClick={() => setStoredNum(storedNum + 1)} variant="primary">+</Button>
          </InputGroup>
        </Col>
        <Col lg={12}>
          <Link to="/" className="btn btn-cart btn-primary">
            Add To Cart
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default AddCart;
