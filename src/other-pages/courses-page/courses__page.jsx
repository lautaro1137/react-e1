import React from "react";
import { CardsCurses } from "../../components/cards_curses/cards_curses";
import { CardCurseContainer, CardCurseGrid } from "./styles";
import { CurseData } from "../../data/curses";

export const CursesPage = () => {
  return (
    <CardCurseContainer>
      <h2>Nuestros cursos</h2>
      <CardCurseGrid>
        {CurseData.map((CurseData) => (
          <CardsCurses key={CurseData.id} {...CurseData} />
        ))}
      </CardCurseGrid>
    </CardCurseContainer>
  );
};
