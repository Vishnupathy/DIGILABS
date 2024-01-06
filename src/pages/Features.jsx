import React from "react";
import Container from "../components/container/Container";
import FeatureOne from "../components/features/FeatureOne";
import FeatureTwo from "../components/features/FeatureTwo";
import { Outlet } from "react-router-dom";

function Features() {
  return (
    <>
      <Container>
        <FeatureOne />
        <Outlet />
        <FeatureTwo />
      </Container>
    </>
  );
}

export default Features;
