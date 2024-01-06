import React from "react";
import TopAdv from "./components/header/TopAdv";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import HeroSection from "./components/hero/HeroSection";
import Features from "./pages/Features";
import Testimonial from "./pages/Testimonial";
import ContactUs from "./pages/ContactUs";
import UserNum from "./pages/UserNum";

function Layout() {
  return (
    <>
      <header>
        <TopAdv />
        <Outlet />
        <Navbar />
      </header>{" "}
      <main>
        <HeroSection />
        <Outlet />
        <Features />
        <Outlet />
        <UserNum />
        <Outlet />
        <Testimonial />
        <Outlet />
        <ContactUs />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
