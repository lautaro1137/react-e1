import React from "react";
import hero from "../../imagenes/navbar-img.png";
import { FooterContainer, FooterLinks, FooterLogo } from "./syles";
export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <ul>
          <li>
            <a href="/#">Inicio</a>
          </li>
          <li>
            <a href="/#">Sobre Nosotros</a>
          </li>
          <li>
            <a href="/#">Cursos</a>
          </li>
          <li>
            <a href="/#">Contacto</a>
          </li>
        </ul>
      </FooterLinks>
      <FooterLogo>
        <img src={hero} alt="" />
      </FooterLogo>
    </FooterContainer>
  );
};
