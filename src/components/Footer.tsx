import React, { FC } from "react";
import logo from "../assets/UniSummitLetrasBlancas.svg";
import "../index.css";

const Footer: FC = () => (
    <footer className="footer">
        <div className="footer-logo">
            <img src={logo} alt="Uni Summit logo" />
        </div>
    </footer>
    );

export default Footer;