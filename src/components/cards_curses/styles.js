import styled from "styled-components";
// export const CardCurseStyle = styled.div`
//   width: 190px;
//   height: 254px;
//   background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
//   border-radius: 20px;
//   transition: all 0.3s;
//   & :hover {
//     box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
//   }
// `;

// export const CardCurseStyle2 = styled.div`
//   width: 190px;
//   height: 254px;
//   background-color: #1a1a1a;
//   border-radius: ;
//   transition: all 0.2s;
//   & :hover {
//     transform: scale(0.98);
//     border-radius: 20px;
//   }
// `;

export const CardCurseStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 10%;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);

  & ::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1%;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
    z-index: -1;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  }

  & :hover::before {
    height: 100%;
  }

  & :hover {
    box-shadow: none;
  }

  @media screen and (max-width: 580px) {
    width: 90%;
    place-content: center;
    place-items: center;
  }
`;
export const CardCurseContent = styled.div`
display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap:10%;
  margin: 1rem;
  color: #e8e8e8;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);

  h3 {
    display: flex;
    font-weight: 600;
    font-size: 28px;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  p {
    line-height: 1.5;
  }

  & button:hover {
    outline: 2px solid #e8e8e8;
    background: transparent;
    color: #e8e8e8;
  }

  & button:active {
    box-shadow: none;
  }
}
`;

export const CardCurseButton = styled.button`
  color: #e8e8e8;
  text-decoration: none;
  padding: 10px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  & :hover {
    outline: 2px solid #e8e8e8;
    background: transparent;
    color: #e8e8e8;
  }
`;
