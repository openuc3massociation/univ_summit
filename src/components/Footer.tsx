import React, { FC } from "react";
import logo from "../assets/UniSummitLetrasBlancas.svg";
import "../index.css";

const Footer: FC = () => (
    <footer className="footer">
        <div className="footer-logo">
            <img src={logo} alt="Uni Summit logo" />
        </div>
        <div className="contacto">
            <p>contacto@unisummit.org</p>
        </div>
    </footer>
    );

export default Footer;