import React, { FC } from "react";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats"
import FAQ from "./components/FAQ"
import Founders from "./components/Founders";
import Footer from "./components/Footer";

const App: FC = () => (
  <>
    <Header />
    <Hero />
    <About />
    <Stats />
    <FAQ />
    <Founders />
    <Footer />
  </>
);

export default App;
