import React from "react";
import hero from "../../imagenes/navbar-img.png";
import { FooterContainer, FooterLinks, FooterLogo } from "./syles";
export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <a href="/#">Inicio</a>
        <a href="/#">Sobre Nosotros</a>
        <a href="/#">Cursos</a>
        <a href="/#">Contactos</a>
      </FooterLinks>
      <FooterLogo>
        <img src={hero} alt="" />
      </FooterLogo>
    </FooterContainer>
  );
};
