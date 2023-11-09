import styled from "styled-components";
export const NavBarContainer = styled.div`
  height: 60px;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  border-bottom: solid 1px #b8a3a3;
  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;
export const LinksContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  a {
    font-size: 0.9rem;
    font-weight:600 ;
    transition: var(--transition);
  }

  a:hover {
    color: var(--color-danger);
  }
   
  }
`;
export const ImgNavBar = styled.img`
  width: 6rem;
`;
