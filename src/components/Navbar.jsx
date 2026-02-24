import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('light-mode');
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo">
                    JD<span className="gradient-text">.</span>
                </a>

                <ul className="nav-links">
                    <li><a href="#about" className="nav-link">Sobre mí</a></li>
                    <li><a href="#skills" className="nav-link">Habilidades</a></li>
                    <li><a href="#projects" className="nav-link">Proyectos</a></li>
                    <li><a href="#services" className="nav-link">Servicios</a></li>
                    <li><a href="#contact" className="nav-link">Contacto</a></li>
                    <li>
                        <button className="theme-toggle" onClick={toggleTheme} aria-label="Cambiar tema" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', padding: '0 0.5rem', outline: 'none' }}>
                            {isDarkMode ? '☀️' : '🌙'}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
