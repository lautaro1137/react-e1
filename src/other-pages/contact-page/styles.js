import styled from "styled-components";
export const ContactPageStyle = styled.section`
  padding: 2rem 2rem 0rem 2rem;
`;
export const ContactForm = styled.div`
  width: var(--container-width-1g);
  background: var(--color-bg1);
  padding: 4rem;
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 4rem;
  height: 30rem;
  margin: 7rem auto;
  border-radius: 1rem;
  input {
  }
  textarea {
    width: 100%;

    padding: 1rem;
    background: #00000033;
    color: var(--color-white);
  }
  @media screen and (max-width: 1024px) {
    gap: 1.5rem;
    margin-top: 3rem;
    height: auto;
    padding: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    margin-top: 0;
    padding: 2rem;
    height: 100%;
  }
  @media screen and (max-width: 480px) {
    padding: 2rem 2rem 2rem 1rem;
  }
`;
export const Aside = styled.aside`
  background: var(--color-danger);
  padding: 3rem;
  border-radius: 1rem;
  position: relative;
  bottom: 8rem;
  height: 90%;

  p {
    font-size: 0.9;
    margin-bottom: 2rem;
  }
  h2 {
    text-align: left;
    margin-bottom: 1rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-inline-start: 4px;
  }

  @media screen and (max-width: 1024px) {
    width: auto;
    padding: 1.5rem;
    bottom: 0;
  }
  @media screen and (max-width: 480px) {
    padding: 2rem 2rem 2rem 0;
  }
`;

export const AsideImg = styled.aside`
  img {
    width: 12rem;
    margin-bottom: 1rem;
  }
`;

export const ContactDetails = styled.li`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  @media screen and (max-width: 1024px) {
    margin-left: 0;
    align-items: self-start;
    gap: 0.2rem;
    align-items: center;
    margin-bottom: 0.5rem;
  }
`;

export const ContactSocials = styled.li`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 1rem;
  font-size: 1.2rem;

  a {
    background: var(--color-bg1);
    padding: 0.5rem;
    border-radius: 50%;
    font-size: 0.9rem;
    transition: var(--transition);
  }
  & a:hover {
    background: transparent;
  }
`;
