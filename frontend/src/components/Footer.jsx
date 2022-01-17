import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './styles/Footer.css'

const NavBar = () => {
  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <Nav sm={4} className="d-flex align-items-center">
            <Nav.Item>
              <Link to="/">
                <img src="https://i.ibb.co/Lv0g29P/logo.jpg" alt="" className="logo" />
              </Link>
            </Nav.Item>
          </Nav>
          <Nav sm={4} className="justify-content-end d-flex">
            <Nav.Item>
              <Nav.Link
                className="text-muted"
                href="https://www.instagram.com/jorchez09/"
              >
                <i className="fab fa-instagram bi ico" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="text-muted"
                href="https://www.facebook.com/Jorge09.Sanchez"
              >
                <i className="fab fa-facebook bi ico" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="text-muted"
                href="https://twitter.com/jorchez09"
              >
                <i className="fab fa-twitter bi ico" />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
  );
};

export default NavBar;