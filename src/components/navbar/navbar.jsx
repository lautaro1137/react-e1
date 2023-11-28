import { Link, NavLink } from "react-router-dom";
import hero from "../../imagenes/navbar-img.png";
import { NavbarContainer, NavbarMenuButton } from "./styles";
import { useContext } from "react";
import { MenuContext } from "../../context/menu";
import { Overlay } from "../overlay/overlay";

export const Navbar = () => {
  const menuValue = useContext(MenuContext);

  if (menuValue.menu) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";

  return (
    <NavbarContainer>
      <div>
        <img src={hero} alt="" />
      </div>

      <ul className={`${menuValue.menu ? "activo" : ""}`}>
        <li>
          <NavLink to="/" onClick={() => menuValue.menuCerrar()}>
            INICIO
          </NavLink>
        </li>
        <li>
          <NavLink to="/sobre-nosotros" onClick={() => menuValue.menuCerrar()}>
            NOSOTROS
          </NavLink>
        </li>
        <li>
          <NavLink to="/cursos" onClick={() => menuValue.menuCerrar()}>
            CURSOS
          </NavLink>
        </li>
        <li>
          <NavLink to="/contactos" onClick={() => menuValue.menuCerrar()}>
            CONTACTO
          </NavLink>
        </li>
      </ul>
      <NavbarMenuButton onClick={() => menuValue.menuSwitch()}>
        <span className={`${menuValue.menu ? "span1" : ""}`}></span>
        <span className={`${menuValue.menu ? "span2" : ""}`}></span>
        <span className={`${menuValue.menu ? "span3" : ""}`}></span>
      </NavbarMenuButton>
      {menuValue.menu && <Overlay />}
    </NavbarContainer>
  );
};
