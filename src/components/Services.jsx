import React from 'react';
import './Services.css';

const Services = () => {
    const servicesData = [
        {
            icon: "🌐",
            title: "Desarrollo Frontend",
            description: "Construcción de interfaces de usuario modernas, responsivas y altamente interactivas con React, Vue y Vanilla JS, priorizando la Experiencia de Usuario (UX) y el rendimiento."
        },
        {
            icon: "⚙️",
            title: "Arquitectura Backend",
            description: "Diseño y desarrollo de sistemas escalables, APIs RESTful y microservicios seguros utilizando Node.js, NestJS y bases de datos relacionales/NoSQL."
        },
        {
            icon: "💻",
            title: "Soluciones Fullstack",
            description: "Desarrollo de aplicaciones End-to-End desde la conceptualización de la base de datos hasta el despliegue de la plataforma interactiva hacia el usuario."
        },
        {
            icon: "🤝",
            title: "Consultoría Técnica",
            description: "Asesoría en toma de decisiones tecnológicas, code reviews, mejora de rendimiento (performance) e implementación de metodologías ágiles."
        }
    ];

    return (
        <section className="section services" id="services">
            <div className="container">
                <h2 className="section-title fade-in-up">Servicios</h2>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div className="service-card glass-panel fade-in-up" style={{ animationDelay: `${index * 0.1}s` }} key={index}>
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
