import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../src/Layout";
import Features from "../src/pages/Features";
import UserNum from "./pages/UserNum";
import Testimonial from "../src/pages/Testimonial";
import ContactUs from "./pages/ContactUs";
import HeroSection from "./components/hero/HeroSection";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/features" element={<Features />} />
          <Route path="/usernum" element={<UserNum />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
