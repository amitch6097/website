import React from 'react';
import './P5Frame.less';
import CircleLink from '../CircleLink/CircleLink';
import OvalLink from '../OvalLink/OvalLink';

interface IP5FrameProps {
    frameURL: string;
    linkURL?: string;
    width?: string;
    height?: string;
    label?: string;
}

export default function P5Frame({
    frameURL,
    linkURL,
    width,
    height,
    label,
}: IP5FrameProps) {
    return (
        <div style={{ width, height }} className="p5-frame">
            <iframe src={frameURL} />
            <div className="p5-frame__links">
                {linkURL && (
                    <div className="p5-frame__link">
                        <CircleLink link={linkURL} label={'< >'} />
                    </div>
                )}
                {label && (
                    <div className="p5-frame__link">
                        <OvalLink link={linkURL} label={label} />
                    </div>
                )}
            </div>
        </div>
    );
}
