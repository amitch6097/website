import React from 'react';
import './Projects.less';

export default function Projects({ projects, onClick }) {
    return (
        <div className="projects">
            {projects &&
                projects.map((project, index) => {
                    return (
                        <div className="projects__project-card">
                            <ProjectCard
                                {...project}
                                id={index}
                                onClick={onClick}
                            />
                        </div>
                    );
                })}
        </div>
    );
}

function ProjectCard({ img, label, onClick, id }) {
    return (
        <div className="project-card" onClick={() => onClick(id)}>
            <div className="project-card__container">
                <div className="project-card__img-container">
                    <img alt={label} src={img} />
                </div>
                <div className="project-card__label-container">
                    <div className="project-card__label">{label}</div>
                </div>
            </div>
        </div>
    );
}
