import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="section contact" id="contact">
            <div className="container">
                <h2 className="section-title fade-in-up">Contáctame</h2>

                <div className="contact-grid">
                    <div className="contact-info fade-in-up">
                        <h3>Hablemos sobre tu próximo proyecto</h3>
                        <p className="contact-description">
                            Ya sea que tengas una idea en mente, un problema técnico que resolver, o simplemente quieras conectar, mi bandeja de entrada siempre está abierta.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="contact-icon">📧</span>
                                <div className="contact-text">
                                    <span className="contact-label">Email</span>
                                    <a href="mailto:juanpablogomezvelez@gmail.com" className="contact-value">juanpablogomezvelez@gmail.com</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <span className="contact-icon">📍</span>
                                <div className="contact-text">
                                    <span className="contact-label">Ubicación</span>
                                    <span className="contact-value">Latinoamérica (Remoto)</span>
                                </div>
                            </div>

                            <div className="contact-item">
                                <span className="contact-icon">💼</span>
                                <div className="contact-text">
                                    <span className="contact-label">Disponibilidad</span>
                                    <span className="contact-value availability"><span className="status-dot"></span> Freelance / Full-time</span>
                                </div>
                            </div>
                        </div>

                        <div className="social-links mt-4">
                            <a href="https://www.linkedin.com/in/juan-pablo-gomez-028665330/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">In</a>
                            <a href="https://github.com/JuanGomez998" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">Gh</a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Twitter">Tw</a>
                        </div>
                    </div>

                    <form action="https://formsubmit.co/juanpablogomezvelez@gmail.com" method="POST" className="contact-form glass-panel fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {/* Configuraciones de FormSubmit */}
                        <input type="hidden" name="_subject" value="¡Nuevo mensaje desde tu Portafolio Web!" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="box" />

                        <div className="form-group">
                            <label htmlFor="name">Nombre Completo</label>
                            <input type="text" name="name" id="name" placeholder="Ej. Ana Pérez" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico</label>
                            <input type="email" name="email" id="email" placeholder="ana@ejemplo.com" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea name="message" id="message" rows="5" placeholder="Cuéntame sobre tu proyecto..." required></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
