import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './styles/NavBar.css'

const NavBar = () => {
  return (
    <div>
      <Navbar className="d-flex flex-wrap align-items-center justify-content-center mb-4 border-bottom">
        <Link className="navbar-brand" to="/">
          <img
            src="https://i.ibb.co/Lv0g29P/logo.jpg"
            className="logo"
            alt="logo"
          />
        </Link>
        <Navbar.Collapse>
          <Nav className="m-auto">
            <Link to="/" className="px-2 link">
              Home
            </Link>
            <Link to="/shop" className="px-2 link">
              Shop
            </Link>
            <Link to="/services" className="px-2 link">
              Services
            </Link>
          </Nav>
        </Navbar.Collapse>

        <Link to="/">
          <img
            class="avatar"
            src="https://p16-va-default.akamaized.net/img/musically-maliva-obj/1665282759496710~c5_720x720.jpeg"
            alt=""
          />
        </Link>
      </Navbar>
    </div>
  );
};

export default NavBar;
