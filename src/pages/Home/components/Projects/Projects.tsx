import React, { useEffect } from 'react';
import './Projects.less';

import { HomeContext } from '../../context/HomeContext';
import ProjectCard from './ProjectCard';
import CircleLink from '../../../../components/CircleLink/CircleLink';

export default function Projects() {
    const { chunckedProjects, onSetProject } = React.useContext(HomeContext);

    const [index, setIndex] = React.useState(0);

    useEffect(
        () => {
            setIndex(0);
        },
        [chunckedProjects]
    );

    const hasLeft = index > 0;
    const hasRight = chunckedProjects.length > index + 1;
    const projects = chunckedProjects[index];
    return (
        <div className="projects">
            {hasLeft && (
                <div className="projects__navigate-button left">
                    <CircleLink
                        label={'<'}
                        onClick={() => setIndex(index - 1)}
                    />
                </div>
            )}
            <div className="projects__projects-container">
                {projects &&
                    projects.map((project, index) => {
                        return (
                            <div
                                key={project.label}
                                className="projects__project-card"
                            >
                                <ProjectCard
                                    {...project}
                                    onClick={() => onSetProject(project)}
                                />
                            </div>
                        );
                    })}
            </div>

            {hasRight && (
                <div className="projects__navigate-button right">
                    <CircleLink
                        label={'>'}
                        onClick={() => setIndex(index + 1)}
                    />
                </div>
            )}
        </div>
    );
}
