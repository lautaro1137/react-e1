import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2%;
  background: var(--color-bg1);
  gap: 40%;
`;

export const FooterLogo = styled.div`
  display: flex;
  
  align-items: center;

  img {
    height: 100px;
    width: 100px;
}
  }
`;
export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    gap: 20%;
  }
`;
