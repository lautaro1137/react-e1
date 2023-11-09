import React from "react";
import { Navbar } from "../components/navbar/navbar";
import { HomeLayout } from "../layout/home/home_layout";
import { Header } from "../components/header/header";
import { DestacadasWidget } from "../components/destacadas/destacadas-widget/destacadas-widget";
import { Footer } from "../components/footer/footer";

export const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <HomeLayout>
        <Header />
        <DestacadasWidget />
      </HomeLayout>
      <Footer />
    </div>
  );
};
