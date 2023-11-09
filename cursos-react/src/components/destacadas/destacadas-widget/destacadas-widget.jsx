import React from "react";

import { DestacadasCards } from "../destacadas-cards";
import { destacados } from "../../../data/destacados";
import { FavSection, FavWidget } from "./styles";

export const DestacadasWidget = () => {
  return (
    <FavSection>
      <h2>Cursos destacados</h2>
      <FavWidget>
        {destacados.map((destacados) => (
          <DestacadasCards key={destacados.id} {...destacados} />
        ))}
      </FavWidget>
    </FavSection>
  );
};
