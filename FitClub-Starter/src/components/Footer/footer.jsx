import React from "react";
import "./footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
const Footer = () => {
    return (
        <div className="Footer-container">
            <hr />
            <div className="footer">
                <div className="special-links">
                    <img src={Github} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={LinkedIn} alt="" />
                </div>
            </div>
            <div className="logo-f">
                <img src={Logo} alt="" />
            </div>
            <div className="blur footer_blur"></div>
            <div className="blur footer_blur"></div>
        </div>
    );
};
export default Footer;