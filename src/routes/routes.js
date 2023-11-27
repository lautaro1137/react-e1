import React from "react";
import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,
} from "react-router-dom";
import { HomeLayout } from "../layout/home/home_layout";
import { HomeScreen } from "../screens/home_screen";
import { ContactScreen } from "../screens/contact_screen";
import { CursesScreen } from "../screens/curses_screen";
import { AboutPage } from "../other-pages/about-page/about__page";

export const Routes = () => {
  return (
    <BrowserRouter>
      <HomeLayout>
        <ReactDomRoutes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/sobre-nosotros" element={<AboutPage />} />
          <Route path="/cursos" element={<CursesScreen />} />
          <Route path="/contactos" element={<ContactScreen />} />
        </ReactDomRoutes>
      </HomeLayout>
    </BrowserRouter>
  );
};
