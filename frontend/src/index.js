import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./landing_Page/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./landing_Page/signup/Signup.js";
import About from "./landing_Page/about/AboutPage.js";
import Products from "./landing_Page/Products/Products.js";
import Pricing from "./landing_Page/pricing/PricingPage.js";
import Support from "./landing_Page/support/SupportPage.js";
import Navbar from "./landing_Page/Navbar.js";
import Footer from "./landing_Page/Footer.js";
import NotFound from "./landing_Page/NotFound.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/About" element={<About />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/Support" element={<Support />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    <Footer />
  </BrowserRouter>
);
