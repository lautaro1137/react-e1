import React from "react";
import { CardCurseButton, CardCurseContent, CardCurseStyle } from "./styles";
export const CardsCurses = ({ titlecurse, description }) => {
  return (
    // <CardCurseStyle>
    //   <CardCurseStyle2>
    //     <div>
    //       <img src={image} alt="img-cursos" />
    //     </div>
    //     <div>
    //       <h4>{titel}</h4>
    //       <p>{description}</p>
    //     </div>
    //   </CardCurseStyle2>
    // </CardCurseStyle>
    <CardCurseStyle>
      <CardCurseContent>
        <h3>{titlecurse}</h3>
        <p>{description}</p>
        <CardCurseButton>Read more</CardCurseButton>
      </CardCurseContent>
    </CardCurseStyle>
  );
};
