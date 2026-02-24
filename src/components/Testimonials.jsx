import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonialsData = [
        {
            name: "Andrés Martínez",
            role: "Tech Lead en StartupX",
            text: "El nivel de atención al detalle y dominio técnico de Juan es impresionante. Entregó la arquitectura completa de nuestra API a tiempo superando todas nuestras expectativas de rendimiento.",
            avatar: "https://i.pravatar.cc/150?img=11"
        },
        {
            name: "Valeria Gómez",
            role: "Product Owner",
            text: "Trabajar con Juan fue una experiencia fantástica. Su capacidad para traducir requerimientos complejos en interfaces de usuario hermosas e intuitivas hizo que nuestro dashboard fuera un éxito.",
            avatar: "https://i.pravatar.cc/150?img=5"
        }
    ];

    return (
        <section className="section testimonials" id="testimonials">
            <div className="container">
                <h2 className="section-title fade-in-up">Testimonios</h2>

                <div className="testimonials-grid">
                    {testimonialsData.map((testimonial, index) => (
                        <div className="testimonial-card glass-panel fade-in-up" style={{ animationDelay: `${index * 0.1}s` }} key={index}>
                            <div className="quote-icon">“</div>
                            <p className="testimonial-text">{testimonial.text}</p>

                            <div className="testimonial-author">
                                <img src={testimonial.avatar} alt={testimonial.name} className="author-avatar" />
                                <div className="author-info">
                                    <h4 className="author-name">{testimonial.name}</h4>
                                    <span className="author-role">{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
