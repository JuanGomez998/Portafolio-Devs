import React from 'react';
import './Skills.css';

const Skills = () => {
    const frontEndSkills = [
        { name: 'HTML & CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'React', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
    ];

    const backEndSkills = [
        { name: 'Node.js', level: 85 },
        { name: 'NestJS', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'REST APIs', level: 90 },
        { name: 'Jest / Testing', level: 70 },
    ];

    return (
        <section className="section skills" id="skills">
            <div className="container">
                <h2 className="section-title fade-in-up">Habilidades Técnicas</h2>

                <div className="skills-grid">
                    {/* Frontend */}
                    <div className="skills-category glass-panel fade-in-up">
                        <h3 className="category-title">
                            <span className="gradient-text">Frontend</span> Development
                        </h3>
                        <div className="skills-list">
                            {frontEndSkills.map((skill, index) => (
                                <div className="skill-item" key={index}>
                                    <div className="skill-info">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-percent">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar-bg">
                                        <div
                                            className="skill-bar-fill"
                                            style={{ width: `${skill.level}%`, animationDelay: `${index * 0.1}s` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="skills-category glass-panel fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h3 className="category-title">
                            <span className="gradient-text">Backend</span> Development
                        </h3>
                        <div className="skills-list">
                            {backEndSkills.map((skill, index) => (
                                <div className="skill-item" key={index}>
                                    <div className="skill-info">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-percent">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar-bg">
                                        <div
                                            className="skill-bar-fill"
                                            style={{ width: `${skill.level}%`, animationDelay: `${index * 0.1 + 0.2}s` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Architectures and Methodologies badges */}
                <div className="methodologies glass-panel fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <h4>Arquitecturas & Metodologías</h4>
                    <div className="badges-container">
                        <span className="badge">Clean Architecture</span>
                        <span className="badge">Git Flow</span>
                        <span className="badge">Scrum & Agile</span>
                        <span className="badge">TDD</span>
                        <span className="badge">CI/CD</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
