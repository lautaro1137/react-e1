import hero from "../../imagenes/navbar-img.png";
import { ImgNavBar, LinksContainer, NavBarContainer } from "./styles";

export const Navbar = () => {
  return (
    <NavBarContainer>
      <a href="/#">
        <ImgNavBar src={hero} alt="" />
      </a>

      <LinksContainer>
        <a href="">Inicio</a>
        <a href="">Sobre Nosotros</a>
        <a href="">Cursos</a>
        <a href="">Contactos</a>
      </LinksContainer>
    </NavBarContainer>
  );
};
