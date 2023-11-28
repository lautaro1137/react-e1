import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalStyles } from "./styles/global-styles.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "./layout/home/home_layout.jsx";
import { HomeScreen } from "./screens/home_screen.jsx";
import { Navbar } from "./components/navbar/navbar.jsx";
import { ContactScreen } from "./screens/contact_screen.jsx";
import { CursesScreen } from "./screens/curses_screen.jsx";
import { AboutPage } from "./other-pages/about-page/about__page.jsx";
import { ContextMenu } from "./context/menu.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
      {
        path: "/contactos",
        element: <ContactScreen />,
      },
      {
        path: "/cursos",
        element: <CursesScreen />,
      },
      {
        path: "/sobre-nosotros",
        element: <AboutPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <ContextMenu>
      <RouterProvider router={router} />
    </ContextMenu>
  </React.StrictMode>
);
