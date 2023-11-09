import React from "react";
import Hero from "../../imagenes/Hero-img.jpeg";
import { HeaderContainer, HeaderLeft, HeaderRigth } from "./styles";
export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <h1>Entra en el Mundo de la Atención Médica Prehospitalaria</h1>
        <p>
          Explora nuestros cursos especializados en atención médica de
          emergencia y descubre el camino hacia una emocionante carrera como
          Técnico en Emergencias Médicas. Obtén las habilidades y el
          conocimiento necesarios para responder de manera efectiva en
          situaciones críticas y salvar vidas.
        </p>
        <button>Mas Info</button>
      </HeaderLeft>
      <HeaderRigth>
        <img src={Hero} alt="" />
      </HeaderRigth>
    </HeaderContainer>
  );
};
