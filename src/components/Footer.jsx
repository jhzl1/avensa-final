import React from "react";
import Logo from "../assets/img/avensa.png";
import logoStar from "../assets/img/star.png";

import {
  YoutubeOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

import { menuFooter } from "./Data";

const Footer = () => {
  return (
    <>
      <div id="footer" className="d-flex flex-column py-4 px-3">
        <ul className="d-flex flex-row justify-content-center flex-wrap redes ">
          <li className="mx-3">
            <a href="http://facebook.com" target="blank" className=" facebook">
              <FacebookOutlined className="fs-3 icono-redes" id="facebook" />
            </a>
          </li>
          <li className="mx-3">
            <a href="http://instagram.com" target="blank">
              <InstagramOutlined className="fs-3 icono-redes" id="instagram" />
            </a>
          </li>
          <li className="mx-3">
            <a href="/" target="blank">
              <TwitterOutlined className="fs-3 icono-redes" id="twitter" />
            </a>
          </li>
          <li className="mx-3">
            <YoutubeOutlined className="fs-3 icono-redes" id="youtube" />
          </li>
          <li className="mx-3">
            <WhatsAppOutlined className="fs-3 icono-redes" id="whatsapp" />
          </li>
        </ul>
      </div>
      <div
        className="d-flex flex-column py-4 px-3 flex-wrap"
        id="container-menu-footer"
      >
        <ul
          className="d-flex justify-content-center flex-wrap"
          id="menu-footer"
        >
          {menuFooter.map((item) => (
            <li key={item.id} className="mx-3 item-menu ">
              <a href="/" className="hvr-underline-from-left item-footer p-1">
                {item.itemMenu}
              </a>
            </li>
          ))}
        </ul>
        <span className="text-center fw-lighter copyright">
          Aerorutas de Venezuela. Todos los derechos reservados. © 2014 - 2021 |
          Caracas, Venezuela
        </span>
      </div>

      <div className="d-flex flex-row justify-content-center p-4 pie-footer">
        <div className="col-6">
          <img src={Logo} alt="" id="logo-footer" />
        </div>
        <div className="col-6 d-flex justify-content-end p-1">
          <img src={logoStar} id="logo-star" alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
