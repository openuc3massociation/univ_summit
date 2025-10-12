import React, { FC } from "react";
import logo from "../assets/UniSummitLetrasBlancas.svg";
import "../index.css";
import "../styles/components/Footer.css"
import linkedin from "../assets/linkedin logo.png";
import instagram from "../assets/instagram.webp";
import tiktok from "../assets/Tiktok_blanco.png";

const Footer: FC = () => (
    <footer className="footer">
        <div className="footer-logo">
            <img src={logo} alt="Uni Summit logo" />
        </div>
        <div className="contacto">
            <a href="mailto:contacto@unisummit.org"><p>contacto@unisummit.org</p></a>
        </div>
        <div className="redes">
            <a href='https://www.linkedin.com/company/unisummitmadrid/' target="_blank" rel="noopener noreferrer">
                <img className="redes-icon" src={linkedin} alt="LinkedIn UniSummit" />
            </a>
            <a href='https://www.instagram.com/uni_summit/' target="_blank" rel='noopener noreferrer'>
                <img className="redes-icon" src={instagram} alt='Instagram UniSummit' />
            </a>
            <a href='https://www.tiktok.com/@unisummit_madrid' target="_blank" rel='noopener noreferrer'>
                <img className="redes-icon" src={tiktok} alt='TikTok UniSummit' />
            </a>
        </div>
    </footer>
    );

export default Footer;