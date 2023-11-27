import styled from "styled-components";
export const AboutLogrosCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  transition: var(--transition);
  :hover {
    background: var(--color-bg1);
  }

  @media all and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 30px;
  }
`;

export const AboutLogrosCard = styled.div`
  padding: 0.5rem;
  border-radius: 1rem;
  text-align: center;
  background: var(--color-danger);

  p {
    margin-top: 1rem;
  }

  @media all and (max-width: 480px) {
    padding: 0.2rem;
    width: 60%;
    margin: 0 auto;
  }
`;

export const AboutLogrosIcon = styled.span`
  padding: 0.6rem;
  border-radius: 1rem;
  display: inline-block;

  font-size: 2rem;
`;
