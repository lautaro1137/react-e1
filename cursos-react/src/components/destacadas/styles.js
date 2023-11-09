import styled from "styled-components";

export const FavContainer = styled.div`
border: #e5e5f7 solid 1px;
  border-radius: 10px;
  padding: 2rem ;
  max-height: 100%;
  max-width: 100%;
  img {
    max-height: 30vh;
    width: 100%;
  
    display:grid;
  }
  h3 {
    font-size: 1.6rem;
    place-items: center;
    place-content: center;
}
p {
    display: block;
    font-size: 0.9rem;
   

  
}
  button {
    display: inline-block;
    justify-content: center;
    background: var(--color-white);
    color: var(--color-black);
    padding: 1rem 2rem;
    border: 1px solid transparent;
    font-weight: 400;
    transition: var(--transition);
    border-radius: 10%;
    margin:auto;
  }
  @media (max-width: 420px) {
img{
  display: none;
}
    
  }

}
`;
