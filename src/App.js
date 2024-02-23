import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/AppBar";
import Footer from "./components/Footer";
import Config from "./config";
import "./App.css";
import SignUp from "./pages/SignUp";
import AuthProvider from "./contexts/AuthProvider";
import Features from "./pages/Features";
import EdgeNetWork from "./pages/EdgeNetWork";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";

function App() {
  const { colorConfig } = Config;
  const [backgroundColor] = useState(colorConfig.mainColor);

  useEffect(() => {
    // Update the CSS variable when the backgroundColor state changes
    document.documentElement.style.setProperty(
      "--background-color",
      backgroundColor
    );
  }, [backgroundColor]);
  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        <main className="main-content">
        <Routes>
          <Route>
          <Route path="/" element={<Home />} />
            <Route path="/edgeNetwork" element={<EdgeNetWork />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
        </Routes>
        </main>
        <Contact />
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
