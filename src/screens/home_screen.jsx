import React from "react";
import { HomeLayout } from "../layout/home/home_layout";

import { Header } from "../components/header/header";
import { AboutWidget } from "../components/about/about_widget/about_widget";
import { DestacadasWidget } from "../components/destacadas/destacadas-widget/destacadas-widget";

export const HomeScreen = () => {
  return (
    <div>
      <Header />
      <AboutWidget />
      <DestacadasWidget />
    </div>
  );
};
