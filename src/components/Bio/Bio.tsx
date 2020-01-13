import React from 'react';
import './Bio.less';

import LocalImage from '../LocalImage/LocalImage';

export default function Bio({}) {
    return (
        <div className="bio">
            <div className="bio__name">
                <h1 className="bio__first-name">Andrew</h1>
                <h1 className="bio__last-name">Mitchell</h1>
            </div>
            <LocalImage
                className="bio__image"
                alt="bio-image"
                src="https://i.imgur.com/xtoLyW2.jpg"
            />
            <h2 className="bio__role">Software Engineer</h2>
            <div className="bio__links">
                <ul className="bio__links-list">
                    <li className="bio__links-list-item">
                        <a className="link-button">Projects</a>
                    </li>
                    <li className="bio__links-list-item">
                        <a
                            className="link-button"
                            href="https://github.com/amitch6097"
                        >
                            Resume
                        </a>
                    </li>
                    <li className="bio__links-list-item">
                        <a
                            className="link-button"
                            href="https://github.com/amitch6097"
                        >
                            Github
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
