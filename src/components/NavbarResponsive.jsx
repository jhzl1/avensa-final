import React from "react";
import Logo from "../assets/img/avensa.png";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

const NavbarResponsive = ({ bg }) => {
  const [visibleRight, setVisibleRight] = React.useState(false);
  return (
    <div
      id="navbar-responsive"
      className="d-flex flex-wrap justify-content-between p-3 d-lg-none"
      style={bg}
    >
      <img src={Logo} alt="" width="200px" height="50px" />

      <Sidebar
        visible={visibleRight}
        position="right"
        baseZIndex={1000000}
        onHide={() => setVisibleRight(false)}
      >
        <h2 style={{ fontWeight: "normal" }}>Menu</h2>
        <ul className="list-group mb-5">
          <li className="list-group-item">
            <i className="fas fa-plane mr-1"></i>Flota
          </li>
          <li className="list-group-item">
            <i className="fas fa-newspaper mr-1"></i> Noticias
          </li>
          <li className="list-group-item">
            {" "}
            <i className="fas fa-user-tie mr-1"></i> Servicios
          </li>
          <li className="list-group-item">
            <i className="pi pi-sign-in mr-1"></i> Iniciar sesión
          </li>
          <li className="list-group-item">
            <i className="fas fa-globe mr-1"></i> Cambiar idioma
          </li>
        </ul>
        <Button
          type="button"
          onClick={() => setVisibleRight(false)}
          label="Atrás"
          className="p-button-secondary"
        />
      </Sidebar>

      <Button
        icon="pi pi-bars"
        onClick={() => setVisibleRight(true)}
        className="p-mr-2 p-button-raised p-button-plain p-button-text "
        label="Menu"
      />
    </div>
  );
};

export default NavbarResponsive;
