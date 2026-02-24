import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <a href="#" className="logo">
                        JD<span className="gradient-text">.</span>
                    </a>
                    <p className="footer-slogan">Construyendo las experiencias web del mañana.</p>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        &copy; {currentYear} Juanito Dev. Todos los derechos reservados.
                    </p>
                    <div className="footer-links">
                        <a href="#">Privacidad</a>
                        <a href="#">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
