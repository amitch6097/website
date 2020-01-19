import React from 'react';
import './Bio.less';

import OvalLink from '../../../../components/OvalLink/OvalLink';
import LocalImage from '../../../../components/LocalImage/LocalImage';

export default function Bio({}) {
    return (
        <div className="bio">
            {/* <div className="bio__name">
                <h1 className="bio__first-name">Andrew</h1>
                <h1 className="bio__last-name">Mitchell</h1>
            </div>
            <LocalImage
                className="bio__image"
                alt="bio-image"
                src="https://i.imgur.com/xtoLyW2.jpg"
            />
            <h2 className="bio__role">Software Engineer</h2> */}
            <div className="bio__links">
                <ul className="bio__links-list">
                    {[
                        {
                            label: 'Projects',
                            link: '',
                        },
                        {
                            label: 'Resume',
                            link: '',
                        },
                        {
                            label: 'GitHub',
                            link: 'https://github.com/amitch6097',
                        },
                    ].map(link => {
                        return (
                            <li
                                key={link.label}
                                className="bio__links-list-item"
                            >
                                <OvalLink {...link} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
