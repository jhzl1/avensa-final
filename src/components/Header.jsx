import React from "react";
import NavbarGeneral from "./NavbarGeneral";
import NavbarResponsive from "./NavbarResponsive";
const Header = () => {
  const colorNavbar = "rgba(160, 160, 160, 0.45)";

  return (
    <div id="header">
      <NavbarGeneral bg={{ background: colorNavbar }} />
      <NavbarResponsive bg={{ background: colorNavbar }} />
      <div className="d-flex align-items-center container-title">
        <h2
          className="mr-4 vuela "
          data-aos="fade-right"
          data-aos-duration="1800"
          data-aos-once="true"
        >
          Vuela{" "}
        </h2>
        <h2
          className="ahora "
          data-aos="fade-left"
          data-aos-delay="600"
          data-aos-duration="1400"
          data-aos-once="true"
        >
          ahora{" "}
          <i
            className="fas fa-chevron-right"
            aria-hidden="true"
            data-aos="flip-left"
            data-aos-duration="1400"
            data-aos-delay="1200"
            data-aos-once="true"
          ></i>
        </h2>
      </div>
    </div>
  );
};

export default Header;
