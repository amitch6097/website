import React from 'react';
import './CircleLink.less';

interface ICircleLinkProps {
    onClick?: () => void;
    link?: string;
    label: string;
}

export default function CircleLink({ label, link, onClick }: ICircleLinkProps) {
    return (
        <div onClick={onClick} className="circle-link">
            <a target="_blank" href={link}>
                {label}
            </a>
        </div>
    );
}
