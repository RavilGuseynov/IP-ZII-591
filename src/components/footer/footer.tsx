import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer-personal-items">
                    <span className="footer-item">Гусейнов Равил</span>
                    <br/>
                    <br/>
                    <span className="footer-item">ЗИИ-591</span>
                </div>
                <div className="footer-other-items">
                    <span className="footer-item">РУТ (МИИТ)</span>
                    <br/>
                    <br/>
                    <span className="footer-item">Москва 2020</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;