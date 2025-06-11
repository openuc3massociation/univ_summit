import React, { FC } from "react";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

const App: FC = () => (
  <>
    <Header />
    <Hero />
    <About />
  </>
);

export default App;
