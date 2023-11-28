import styled from "styled-components";

export const OverlayContainer = styled.div`
  position: absolute;
  top: 5px;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 1;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(7px);
  display: block;
`;
