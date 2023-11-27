import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2%;
  gap: 40%;
  background: var(--color-bg1);
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
  align-items: center;
  justify-content: space-between;

  li {
    gap: 20%;
  }
`;
