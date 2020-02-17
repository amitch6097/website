import React from 'react';
import './ProjectCard.less';

import LocalImage from '../../../../components/LocalImage/LocalImage';
import P5Frame from '../../../../components/P5Frame/P5Frame';

interface IProjectCardProps {
    image?: string;
    label: string;
    onClick: () => void;
    p5?: Website.IP5Frame;
}

export default function ProjectCard({
    image,
    label,
    onClick,
    p5,
}: IProjectCardProps) {
    return (
        <div className="project-card" onClick={onClick}>
            <div className="project-card__container">
                <div className="project-card__img-container">
                    {p5 ? (
                        <P5Frame
                            width={'100%'}
                            height={'100%'}
                            frameURL={p5.frameURL}
                        />
                    ) : (
                        <LocalImage alt={label} src={image} />
                    )}
                </div>
                <div className="project-card__label-container">
                    <h3 className="project-card__label">{label}</h3>
                </div>
            </div>
        </div>
    );
}
