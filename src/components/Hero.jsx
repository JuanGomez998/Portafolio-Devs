import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-bg"></div>
            <div className="container">
                <div className="hero-grid">

                    <div className="hero-content">
                        <span className="hero-badge fade-in-up" style={{ animationDelay: '0.1s' }}>
                            Fullstack Developer
                        </span>
                        <h1 className="hero-title fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Hola, soy Juan.<br />
                            <span className="gradient-text">Construyo la web</span><br />
                            escalable.
                        </h1>
                        <p className="hero-description fade-in-up" style={{ animationDelay: '0.3s' }}>
                            Desarrollador de software latinoamericano apasionado por crear soluciones web modernas, APIs robustas y experiencias de usuario memorables.
                        </p>
                        <div className="hero-buttons fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <a href="#projects" className="btn btn-primary">Ver Proyectos</a>
                            <a href="#contact" className="btn btn-secondary">Contrátame</a>
                        </div>
                    </div>

                    <div className="hero-image-wrapper fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="hero-shape"></div>
                        {/* The photo uses a placeholder gradient or elegant abstract image if no photo is available */}
                        <div className="hero-avatar-placeholder">
                            <div className="glass-overlay">JD</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
