import React from 'react';
import './P5Frame.less';
import CircleLink from '../CircleLink/CircleLink';
import OvalLink from '../OvalLink/OvalLink';

export default function P5Frame({ frameURL, linkURL, width, height }) {
    return (
        <div style={{ width, height }} className="p5-frame">
            {/* <iframe src={frameURL} /> */}
            <div className="p5-frame__links">
                <div className="p5-frame__link">
                    <CircleLink link={linkURL} label={'< >'} />
                </div>
                <div className="p5-frame__link">
                    <OvalLink link={linkURL} text={'More Info'} />
                </div>
            </div>
        </div>
    );
}
