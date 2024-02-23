import React from "react";
import "../App.css";
import Features from "./Features";
import EdgeNetWork from "./EdgeNetWork";
import Pricing from "./Pricing";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features layoutStyle="mainPage" sx={{margin: 5}} />
      <EdgeNetWork />
      <Pricing />
    </div>
  );
};

export default Home;
