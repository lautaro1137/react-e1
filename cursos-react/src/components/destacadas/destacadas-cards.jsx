import React from "react";
import { FavContainer } from "./styles";

export const DestacadasCards = ({ img, titel, text }) => {
  return (
    <FavContainer>
      <img src={img} alt="" />
      <h3>{titel}</h3>
      <p>{text}</p>
      <button>Mas Info</button>
    </FavContainer>
  );
};
