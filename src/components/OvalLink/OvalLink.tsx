import React from 'react';
import './OvalLink.less';

interface IOvalLinkProps {
    text: string;
    link: string;
}

export default function OvalLink({ text, link }: IOvalLinkProps) {
    return (
        <div className="oval-link">
            <a href={link}>{text}</a>
        </div>
    );
}
