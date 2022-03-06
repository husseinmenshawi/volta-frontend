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

const Footer = (props) => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        background: "#1E88E5",
      }}
    >
      <p style={{ color: "white", margin: 0 }}>© Volta 2022</p>
    </footer>
  );
};

export default Footer;
