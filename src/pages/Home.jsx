import React from "react";
import Container from "../components/container/Container";
import { Outlet } from "react-router-dom";
import HeroSection from "../components/hero/HeroSection";
import LogoCloud from "../components/hero/LogoCloud";

function Home() {
  return (
    <>
      <Container>
        <HeroSection />
        <Outlet />
        <LogoCloud />
      </Container>
    </>
  );
}

export default Home;
