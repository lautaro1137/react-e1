import styled from "styled-components";

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 25px;
  grid-row-gap: 25px;

  background-color: #e5e5f7;
  opacity: 0.9;
  background-image: repeating-radial-gradient(
      circle at 0 0,
      transparent 0,
      #e5e5f7 7px
    ),
    repeating-linear-gradient(#b1344755, #7a1b2a);
  max-height: 50%;
  max-width: 100vw;
  margin: 0 auto;
  padding: 6rem 2rem;

  @media all and (max-width: 860px) {
    grid-template-columns: 1fr;
    margin-top: 2rem;
  }
`;
export const AboutContainerRigth = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 10px;
  margin: 5%;

  @media all and (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;
export const AboutRigt = styled.div`
  display: grid;
`;

export const AboutRigtTittel = styled.h2`
  color: var(--color-black);
  text-align: center;
  margin-bottom: 10px;
`;
