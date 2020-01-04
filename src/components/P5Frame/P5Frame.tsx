import React from 'react';
import './P5Frame.less';
import CircleLink from '../CircleLink/CircleLink';

export default function P5Frame({ frameURL, linkURL, width, height }) {
    return (
        <div style={{ width, height }} className="p5-frame">
            <iframe src={frameURL} />
            <div className="p5-frame__link">
                <CircleLink link={linkURL} text={'< >'} />
            </div>
        </div>
    );
}
