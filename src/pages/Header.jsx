import React from "react";
import Container from "../components/container/Container";
import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import TopAdv from "../components/header/TopAdv";

function Header() {
  return (
    <>
      <Container>
        <TopAdv />
        <Outlet />
        <Navbar />
      </Container>
    </>
  );
}

export default Header;
