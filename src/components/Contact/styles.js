import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-right: 4rem;
  @media screen and (max-width: 1024px) {
    align-self: center;
  }
`;

export const FormName = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  width: 100%;

  input {
    width: 100%;
    padding: 1rem;
    background: #00000033;
    color: var(--color-white);
    gap: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

export const InputEmail = styled.div`
  input {
    width: 100%;
    padding: 1rem;
    background: #00000033;
    color: var(--color-white);
  }
`;

export const FormButton = styled.button`
  display: inline-block;
  background: var(--color-white);
  color: var(--color-black);
  padding: 1rem 2rem;
  border: 1px solid transparent;
  font-weight: 80%;
  transition: var(--transition);
  border-radius: 5%;
  margin: 0% 10%;

  &:hover {
    background: transparent;
    color: var(--color-white);
    border-color: var(--color-white);
  }
`;
