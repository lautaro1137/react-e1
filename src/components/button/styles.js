import styled from "styled-components";
export const ButtonStyles = styled.button`
display: inline-block;
  background: var(--color-white);
  color: var(--color-black);
  padding: 1rem 2rem;
  border: 1px solid transparent;
  font-weight: 500;
  transition: var(--transition);
  border-radius: 5%;
  :hover {
    background: transparent;
    color: var(--color-white);
    border-color: var(--color-white);
`;
