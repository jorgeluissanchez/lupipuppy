import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import "./styles/Filter.css";

const Filter = () => {
  return (
    <div>
      <Nav justify variant="tabs">
        <NavDropdown title="Price" id="nav-price">
          <NavDropdown.Item eventKey="0-50">0 - 50</NavDropdown.Item>
          <NavDropdown.Item eventKey="50-150">50 - 150</NavDropdown.Item>
          <NavDropdown.Item eventKey="150-300">150 - 300</NavDropdown.Item>
          <NavDropdown.Item eventKey="300-500">300 - 500</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Category" id="nav-category">
          <NavDropdown.Item eventKey="Toy">Toy</NavDropdown.Item>
          <NavDropdown.Item eventKey="Food">Food</NavDropdown.Item>
          <NavDropdown.Item eventKey="Medicine">Medicine</NavDropdown.Item>
          <NavDropdown.Item eventKey="Cloth">Cloth</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Qualification" id="nav-qualification">
          <NavDropdown.Item eventKey="1">1</NavDropdown.Item>
          <NavDropdown.Item eventKey="2">2</NavDropdown.Item>
          <NavDropdown.Item eventKey="3">3</NavDropdown.Item>
          <NavDropdown.Item eventKey="4">4</NavDropdown.Item>
          <NavDropdown.Item eventKey="4">5</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </div>
  );
};

export default Filter;
