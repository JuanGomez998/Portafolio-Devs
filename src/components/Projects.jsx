import React from 'react';
import Tilt from './Tilt';
import './Projects.css';

const Projects = () => {
    const projectsData = [
        {
            title: "Plataforma E-commerce Fullstack",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "App de comercio electrónico completa con pagos integrados, carrito en tiempo real, autenticación segura y panel de administración.",
            technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
            github: "#",
            demo: "#"
        },
        {
            title: "API REST Segura Bank System",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Backend escalable implementando Onion Architecture, JWT, Role-Based Access y encriptación de datos sensibles.",
            technologies: ["NestJS", "TypeScript", "Jest", "Docker"],
            github: "#",
            demo: "#"
        },
        {
            title: "Dashboard SaaS Analytics",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Panel de control para la visualización de métricas en tiempo real de empresas SaaS con gráficos interactivos y websockets.",
            technologies: ["React", "TailwindCSS", "Recharts", "Socket.io"],
            github: "#",
            demo: "#"
        },
        {
            title: "Gestor de Tareas Colaborativo",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Aplicación Fullstack para gestión de equipos con autenticación social, drag-and-drop y sincronización en vivo.",
            technologies: ["React", "Firebase", "Node.js", "Express"],
            github: "#",
            demo: "#"
        }
    ];

    return (
        <section className="section projects" id="projects">
            <div className="container">
                <h2 className="section-title fade-in-up">Proyectos Destacados</h2>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <Tilt className="project-card glass-panel fade-in-up" key={index}>
                            <div style={{ animationDelay: `${index * 0.1}s`, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div className="project-image-container">
                                    <img src={project.image} alt={project.title} className="project-image" />
                                    <div className="project-overlay">
                                        <div className="project-links">
                                            <a href={project.github} className="btn-icon">GitHub</a>
                                            <a href={project.demo} className="btn-icon primary">Live Demo</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>

                                    <div className="project-tech">
                                        {project.technologies.map((tech, i) => (
                                            <span className="tech-tag" key={i}>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    ))}
                </div>

                <div className="projects-more">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-secondary">
                        Ver más en GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
