import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import Service from "../pages/Service";
import About from "../pages/About";
import Kitchen from "../RoutingInnerChild/kitchen";
import HeroComponent from "../pages/HeroComponent";

const RoutingComponent = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <main>
        <div>
        <Routes>

          {/* Parent route */}
          <Route path="/" element={<HomePage />}>

            {/* Nested routes */}
            <Route index element={<HeroComponent />} />
            <Route path="kitchen" element={<Kitchen />} />

          </Route>

          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />

        </Routes>
        </div>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default RoutingComponent;