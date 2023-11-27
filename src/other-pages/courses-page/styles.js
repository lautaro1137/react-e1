import styled from "styled-components";
export const CardCurseContainer = styled.div`
  padding: 2rem 0;
  margin: 4rem;
  display: grid;
  h2 {
    font-size: 2rem;
    margin-bottom: 3rem;
    place-content: center;
    place-items: center;
  }
  @media screen and (max-width: 580px) {
    padding: 1rem 0;
  }
`;
export const CardCurseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 41px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
  @media screen and (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(12, 1fr);
  }
`;
