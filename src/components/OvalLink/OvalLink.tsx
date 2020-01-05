import React from 'react';
import './OvalLink.less';

export default function OvalLink({ text, link }) {
    return (
        <div className="oval-link">
            <a href={link}>{text}</a>
        </div>
    );
}
