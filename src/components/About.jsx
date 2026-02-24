import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="section about" id="about">
            <div className="container">
                <h2 className="section-title fade-in-up">Sobre Mí</h2>

                <div className="about-grid">
                    <div className="about-content glass-panel fade-in-up">
                        <h3>Mi Historia</h3>
                        <p>
                            Empecé mi viaje en el desarrollo web de forma autodidacta, impulsado por una curiosidad insaciable por entender cómo funcionan las cosas en internet. Posteriormente, formalicé mis conocimientos en el <strong>SENA</strong>, lo que me dio las bases sólidas en arquitectura y buenas prácticas.
                        </p>
                        <p>
                            Actualmente, me especializo en el ecosistema de <strong>JavaScript/TypeScript</strong>, construyendo desde interfaces dinámicas e intuitivas con React hasta backends escalables y seguros con Node.js y NestJS, implementando arquitecturas como Onion Architecture y metodologías de pruebas rigurosas.
                        </p>
                        <p>
                            Soy un fiel creyente del código limpio, la optimización de rendimiento y el diseño centrado en el usuario.
                        </p>

                        <a href="/cv-juan-gomez.html" className="btn btn-primary mt-4" target="_blank" rel="noreferrer">Ver / Descargar CV</a>
                    </div>

                    <div className="about-stats fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="stat-card glass-panel">
                            <span className="stat-number gradient-text">3+</span>
                            <span className="stat-label">Años de<br />Experiencia</span>
                        </div>
                        <div className="stat-card glass-panel">
                            <span className="stat-number gradient-text">20+</span>
                            <span className="stat-label">Proyectos<br />Completados</span>
                        </div>
                        <div className="stat-card glass-panel">
                            <span className="stat-number gradient-text">100%</span>
                            <span className="stat-label">Compromiso y<br />Calidad</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
