import { NavLink } from "react-router-dom";
import hero from "../../imagenes/navbar-img.png";
import { BgDiv, ImgNavBar, LinksContainer, NavBarContainer } from "./styles";

export const Navbar = () => {
  return (
    <>
      <NavBarContainer>
        <NavLink to="/">
          <ImgNavBar src={hero} alt="" />
        </NavLink>

        <LinksContainer>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/sobre-nosotros">Sobre Nosotros</NavLink>
          <NavLink to="/cursos">Cursos</NavLink>
          <NavLink to="/contactos">Contactos</NavLink>
        </LinksContainer>
      </NavBarContainer>
    </>
  );
};
