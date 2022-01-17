import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const Layout = () => {
  return (
    <div>
      <Container fluid>
        <NavBar />
        <Outlet />
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
