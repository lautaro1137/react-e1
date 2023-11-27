import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 5rem;
  height: 91%;
  margin: 0 auto;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const HeaderLeft = styled.div`
  width: var(--container-width-1g);
  
  margin: 0 auto;
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

  @media (max-width: 650px) {
    text-align: center;
    button {
      place-content: center;
}
    }

  }
`;
export const HeaderRigth = styled.div`
  max-width: 100%;
  img {
    width: 80%;
  display: block;
  object-fit: cover;
  padding:  2rem;
  }
  @media (max-width: 768px) {
    img {
    padding:  0;
    }

    @media (max-width: 650px) {
      


      img {
       display: none;
        }
  }
  @media (max-width: 420px);{
        display: none;
    
`;
