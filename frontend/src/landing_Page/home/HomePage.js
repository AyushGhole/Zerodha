import React from "react";
import Awards from "./Awards.js";
import Hero from "./Hero.js";
import Stats from "./Stats.js";
import Pricing from "./Pricing.js";
import OpenAccount from "../OpenAccount.js";
import Eduction from "./Education.js";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Eduction />
      <OpenAccount />
    </>
  );
}

export default HomePage;
