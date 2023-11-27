import React from "react";
import {
  AboutPageContainer,
  AboutPageLeft,
  AboutPageRight,
  AboutPageSection,
} from "./styles";
import AboutPageImg from "srcimagenesabout-page-img.jpg";
import { AboutLogrosRight } from "../about_logros_right/about_logros_right";

export const AboutLogrosWidget = () => {
  return (
    <AboutPageSection>
      <AboutPageContainer>
        <AboutPageLeft>
          <img src={AboutPageImg} alt="img" />
        </AboutPageLeft>
        <AboutPageRight>
          <h2>
            "Líderes en Rescate: Preparacion911 y Nuestra Experiencia en
            Atención Médica de Emergencia
          </h2>
          <p>
            Nuestros instructores cuentan con más de 10 años de experiencia en
            el campo de la salud y el rescate, asegurando que recibirás una
            formación de calidad respaldada por un profundo conocimiento
            práctico. Su amplia experiencia garantiza que estarás aprendiendo de
            profesionales altamente capacitados y dedicados a tu preparación en
            situaciones de emergencia.
          </p>
          <AboutLogrosRight />
        </AboutPageRight>
      </AboutPageContainer>
    </AboutPageSection>
  );
};
