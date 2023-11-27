import styled from "styled-components";
export const AboutCardInfo = styled.div`
  background: var(--color-bg1);
  border: solid 1px white;
  border-radius: 20px;
  max-width: 100%;
  max-height: auto;
  padding: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  p {
    font-size: 15px;
  }
`;
