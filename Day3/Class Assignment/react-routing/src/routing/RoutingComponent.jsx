import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Service from "../pages/Service";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import HeroComponent from "../pages/HeroComponent"
import Kitchen from "../RoutingInnerKitchen/Kitchen"
const RoutingComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} >
           <Route path="/Kitchen" element={<Kitchen/>}/>
          </Route>
          <Route index element={<HeroComponent/>}/>
         
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default RoutingComponent;
