import React from 'react';
import './OvalLink.less';

interface IOvalLinkProps {
    onClick?: () => void;
    link?: string;
    label: string;
    selected?: boolean;
}

export default function OvalLink({
    label,
    link,
    onClick,
    selected,
}: IOvalLinkProps) {
    return (
        <div
            onClick={onClick}
            className={`oval-link ${selected ? 'selected' : ''}`}
        >
            {(onClick && label) || (
                <a target="_blank" href={link}>
                    {label}
                </a>
            )}
        </div>
    );
}
