import React from "react";
import { Navbar } from "react-bootstrap";
import Logo from "../assets/img/avensa.png";
import { Link } from "react-router-dom";
import { Dropdown, Menu } from "antd";
const NavbarGeneral = ({ bg }) => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Español</Menu.Item>
      <Menu.Item key="2">English</Menu.Item>
    </Menu>
  );
  return (
    <Navbar
      style={bg}
      expand="lg"
      className="p-3 d-none d-lg-block"
      variant="dark"
      data-aos="zoom-in-down"
      data-aos-duration="1000"
      id="navbar-general"
    >
      <Navbar.Brand href="#home" className="col-6 navbar-logo">
        <img src={Logo} alt="" width="200px" height="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="d-flex justify-content-end float-end mt-2"
      >
        <Link
          href="#link"
          className="nav-link link-navbar hvr-underline-from-left"
        >
          Flota
        </Link>
        <Link
          href="#link"
          className="nav-link link-navbar hvr-underline-from-left"
        >
          Noticias
        </Link>

        <Link
          href="#link"
          className="nav-link link-navbar hvr-underline-from-left"
        >
          Servicios
        </Link>

        <Link
          to="/login"
          className="nav-link link-navbar hvr-underline-from-left"
        >
          Login <i className="pi pi-sign-in"></i>
        </Link>

        <Dropdown.Button className="nav-link link-navbar" overlay={menu}>
          Cambiar Idioma <i className="fas fa-globe m-1"></i>
        </Dropdown.Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarGeneral;
