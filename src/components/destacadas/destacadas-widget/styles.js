import styled from "styled-components";

export const FavSection = styled.div`
  width: 70%;
  padding: 2rem 0;
  height: 80%;
  display: grid;
  width: var(--container-width-1g);
  margin: 0 auto;

  h2 {
    text-align: center;
    margin-bottom: 4rem;
  }
`;
export const FavWidget = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 1fr;
  grid-column-gap: 2%;
  grid-row-gap: 0px;

  @media all and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-columns: 60%;
    gap: 2rem;
    place-content: center;
  }

  @media all and (max-width: 768px) {
    grid-template-columns: 90%;
  }
`;
