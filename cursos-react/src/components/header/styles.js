import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 5rem;
  height: 90%;
  margin: 0 auto;

  @media (max-width: 420px);
   {
    grid-template-columns: 1fr;
  }
`;

export const HeaderLeft = styled.div`
  width: var(--container-width-1g);

  margin: 0 10%;
  h1 {
    font-size: 2.4rem;
  }
  p {
    margin: 1rem 0 2.4rem;
  }
  button {
    display: inline-block;
    align-items: center;
    justify-content: center;
    background: var(--color-white);
    color: var(--color-black);
    padding: 1rem 2rem;
    border: 1px solid transparent;
    font-weight: 500;
    transition: var(--transition);
    border-radius: 5%;
  }
  button:hover {
    background: transparent;
    color: var(--color-white);
    border-color: var(--color-white);
  }
`;
export const HeaderRigth = styled.div`
  max-width: 100%;
  img {
    margin: 10%;
    width: 70%;
  }
  @media (max-width: 768px) {
    img {
      margin: 2%;
      width: 50%;
    }
  }
  @media (max-width: 420px);{
        display: none;
    
`;
