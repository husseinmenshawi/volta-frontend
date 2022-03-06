import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  Button,
} from "reactstrap";

const HeaderHome = (props) => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  return (
    <Navbar color="primary" dark expand="md" fixed="top">
      <div className="d-flex align-items-center">
        <div className="d-lg-block d-none me-5 pe-3">
          <h4 style={{ color: "white", fontWeight: "bold", marginBottom: "0" }}>
            <NavbarBrand href="/">VOLTA</NavbarBrand>
          </h4>
        </div>
        <Button
          color="primary"
          className=" d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          //   onClick={Handletoggle}
        ></Button>
      </div>

      <Collapse navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link to="/login" className="nav-link">
              Sign In
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/register" className="nav-link">
              Sign Up
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default HeaderHome;
