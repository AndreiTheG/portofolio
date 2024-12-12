import React, { useState } from 'react';
import './Projects.css';

const ProjectCard = ({ title, description, fullDescription, technologies, link }) => {
    let [showMore, setShowMore] = useState(false);
    
    return (
        <div className="project-card">
            <a href={link} className="project-link">
                <h2 className='project-title'>{title}</h2>
            </a>
            <h3>Technologies:</h3>
            <div className="technologies">
                {technologies.map((tech, index) => (
                    <span key={index} className="technology">
                        {tech}
                    </span>
                ))}
            </div>
            <h3>Description</h3>
            <p>
                {showMore ? fullDescription : description}
                <span
                className='more-toggle'
                onClick={() => setShowMore(!showMore)}>
                    {showMore ? ' Show less ▲' : ' More ▼'}
                </span>
            </p>
        </div>
    );
};

export default ProjectCard;