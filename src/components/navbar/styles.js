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

export const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  & .active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
