import styled from "styled-components";
export const AboutPageSection = styled.section`
  margin-top: 3rem;
  padding: 6rem 0;
  @media screen and (max-width: 1024px) {
    margin-top: 2rem;
  }
`;

export const AboutPageContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 5rem;
  width: var(--container-width-1g);
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;
export const AboutPageLeft = styled.div`
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 40px;
    @media screen and (max-width: 1024px) {
      width: 100%;
      display: block;
      object-fit: cover;
      margin: auto;
    }
  }
`;
export const AboutPageRight = styled.div`
  p {
    margin: 1.6rem 0 2.5rem;
  }
`;
