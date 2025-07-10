import React, { FC } from "react";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats"
import BubbleImg from "./components/BubbleImg"
import FAQ from "./components/FAQ"

const App: FC = () => (
  <>
    <Header />
    <Hero />
    <About />
    <Stats />
    <BubbleImg />
    <FAQ />
  </>
);

export default App;
