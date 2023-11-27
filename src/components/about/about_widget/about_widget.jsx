import React from "react";
import { AboutText } from "../about_text/about_text";

import { cardsArray } from "../../../data/cards_about";

import { AboutLeft } from "../about_text/styles";
import {
  AboutContainer,
  AboutContainerRigth,
  AboutRigt,
  AboutRigtTittel,
} from "./styles";
import { CardsAbout } from "../cards_info/cards_info";

export const AboutWidget = () => {
  return (
    <AboutContainer>
      <AboutLeft>
        <AboutText />
      </AboutLeft>
      <AboutRigt>
        <AboutRigtTittel>Beneficios</AboutRigtTittel>
        <AboutContainerRigth>
          {cardsArray.map((cardsArray) => (
            <CardsAbout key={cardsArray.id} {...cardsArray} />
          ))}
        </AboutContainerRigth>
      </AboutRigt>
    </AboutContainer>
  );
};
