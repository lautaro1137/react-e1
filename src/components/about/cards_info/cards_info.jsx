import React from "react";
import { AboutCardInfo } from "./styles";
export const CardsAbout = ({ titleCard, description }) => {
  return (
    <AboutCardInfo>
      <h4>{titleCard}</h4>
      <p>{description}</p>
    </AboutCardInfo>
  );
};
