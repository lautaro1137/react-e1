import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export const ContextMenu = ({ children }) => {
  const [menu, setMenu] = useState(false);

  const menuSwitch = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  const menuCerrar = () => {
    setMenu(false);
  };

  return (
    <MenuContext.Provider value={{ menu, menuSwitch, menuCerrar }}>
      {children}
    </MenuContext.Provider>
  );
};
