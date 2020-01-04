import React from 'react';
import './CircleLink.less';

export default function CircleLink({ text, link }) {
    return (
        <div className="circle-link">
            <a href={link}>{text}</a>
        </div>
    );
}
