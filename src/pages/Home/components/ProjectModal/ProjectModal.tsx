import React, { useEffect } from 'react';
import './ProjectModal.less';
import { HomeContext } from '../../context/HomeContext';

import LocalImage from '../../../../components/LocalImage/LocalImage';
import CircleLink from '../../../../components/CircleLink/CircleLink';
import OvalLink from '../../../../components/OvalLink/OvalLink';
import P5Frame from '../../../../components/P5Frame/P5Frame';

export default function ProjectModal() {
    const {
        project,
        onSetProject,
        onSetTag,
        onCloseProjectModal,
        randomProjects,
        onProjectModalOnSetTag,
    } = React.useContext(HomeContext);
    const { label, images, description, links, tags, p5 } = project;

    useEffect(() => {
        document.documentElement.style.overflow = 'hidden';
        return () => {
            document.documentElement.style.overflow = 'auto';
        };
    });

    return (
        <div className="project-modal">
            <div className="project-modal__content">
                <div className="project-modal__content-images">
                    {images &&
                        images.map((image, index) => {
                            return (
                                <div
                                    key={image + index}
                                    className="project-modal__content-images-image-container"
                                >
                                    <LocalImage
                                        src={image}
                                        alt={`${
                                            label ? label + '_' : ''
                                        }image_ ${index}`}
                                    />
                                </div>
                            );
                        })}
                    {p5 &&
                        [null, null, null].map((empty, index) => {
                            return (
                                <div
                                    key={index}
                                    className="project-modal__content-images-image-container"
                                >
                                    <P5Frame
                                        frameURL={p5.frameURL}
                                        links={p5.links}
                                        height={'33vw'}
                                        width={'33vw'}
                                    />
                                </div>
                            );
                        })}
                </div>
                <div className="project-modal__content-text">
                    <div className="project-modal__content-text-left">
                        <h2 className="project-modal__content-section modal__content-text-left-label">
                            {label}
                        </h2>
                        <p className="project-modal__content-section  modal__content-text-left-description">
                            {description}
                        </p>
                        <div className="project-modal__content-section modal__content-text-left-links">
                            {links &&
                                links.map(link => {
                                    return (
                                        <div
                                            key={link.label}
                                            className="project-modal__content-text-left-links-link"
                                        >
                                            <OvalLink
                                                label={link.label}
                                                link=""
                                            />
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                    <div className="project-modal__content-text-right">
                        {tags && (
                            <div className="project-modal__content-section tags">
                                <h3 className="project-modal__content-text-right-section-label tags-label">
                                    Tags
                                </h3>
                                <div className="project-modal__content-text-right-section-tags">
                                    {tags.map(tag => {
                                        return (
                                            <div
                                                key={tag.label}
                                                className="project-modal__content-text-right-tags-tag"
                                            >
                                                <OvalLink
                                                    label={tag.label}
                                                    link=""
                                                    onClick={() =>
                                                        onProjectModalOnSetTag(
                                                            tag
                                                        )
                                                    }
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                        {randomProjects && (
                            <div className="project-modal__content-section projects">
                                <h3 className="project-modal__content-text-right-section-label projects-label">
                                    More Projects
                                </h3>
                                <div className="project-modal__content-text-right-section-projects">
                                    {randomProjects.map(project => {
                                        return (
                                            <div
                                                key={project.label}
                                                className="project-modal__content-text-right-projects-project"
                                            >
                                                <OvalLink
                                                    label={project.label}
                                                    link=""
                                                    onClick={() =>
                                                        onSetProject(project)
                                                    }
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="project-modal__close-container">
                <CircleLink label={'X'} onClick={onCloseProjectModal} />
            </div>
        </div>
    );
}
