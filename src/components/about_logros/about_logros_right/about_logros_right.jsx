import React from "react";

import {
  faEarthAmericas,
  faUsers,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AboutLogrosCard, AboutLogrosCards, AboutLogrosIcon } from "./styles";
export const AboutLogrosRight = () => {
  return (
    <AboutLogrosCards>
      <AboutLogrosCard>
        <AboutLogrosIcon>
          <FontAwesomeIcon icon={faVideo} />
        </AboutLogrosIcon>
        <h3>+150</h3>
        <p>Cursos impartidos</p>
      </AboutLogrosCard>

      <AboutLogrosCard>
        <AboutLogrosIcon>
          <FontAwesomeIcon icon={faUsers} />
        </AboutLogrosIcon>
        <h3>+400</h3>
        <p>Alumnos</p>
      </AboutLogrosCard>

      <AboutLogrosCard>
        <AboutLogrosIcon>
          <FontAwesomeIcon icon={faEarthAmericas} />
        </AboutLogrosIcon>
        <h3>4</h3>
        <p>Paises diferentes</p>
      </AboutLogrosCard>
    </AboutLogrosCards>
  );
};
