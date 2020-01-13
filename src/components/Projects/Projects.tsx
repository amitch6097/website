import React from 'react';
import './Projects.less';

import LocalImage from '../LocalImage/LocalImage';

interface IProjectsProps {
    projects: Website.IProject[];
    onClick: (project: Website.IProject) => void;
}

export default function Projects({ projects, onClick }: IProjectsProps) {
    return (
        <div className="projects">
            {projects &&
                projects.map((project, index) => {
                    return (
                        <div
                            key={project.label}
                            className="projects__project-card"
                        >
                            <ProjectCard
                                {...project}
                                onClick={() => onClick(project)}
                            />
                        </div>
                    );
                })}
        </div>
    );
}

function ProjectCard({ image, label, onClick }) {
    return (
        <div className="project-card" onClick={onClick}>
            <div className="project-card__container">
                <div className="project-card__img-container">
                    <LocalImage alt={label} src={image} />
                </div>
                <div className="project-card__label-container">
                    <div className="project-card__label">{label}</div>
                </div>
            </div>
        </div>
    );
}
