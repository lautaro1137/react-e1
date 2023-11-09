import styled from "styled-components";

export const FavSection = styled.div`
  width: 70%;
  margin: auto;
  padding: 2rem 0;
  height: 80%;
  display: grid;
  h2 {
    font-size: 1.6rem;
    place-items: center;
  }
  @media (max-width: 768px) {
    width: 70%;
    margin: 10%;
    padding: 2rem 0;
    height: 80%;
  }
`;
export const FavWidget = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2%;
  grid-row-gap: 0px;
`;
