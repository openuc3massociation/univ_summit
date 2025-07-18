import React, { FC } from "react";
import "../index.css";

const Header: FC = () => (
  <header>
    <div className="topbar">
      <span>UNIV SUMMIT MADRID</span>
      <span className="separator">|</span>
      <span>FECHA</span>
      <span className="separator">|</span>
      <span>UC3M</span>
      <span className="separator">|</span>
      <span>CUENTA ATRÁS</span>
    </div>
  </header>
);

export default Header;
