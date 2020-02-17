import React from 'react';
import './P5Frame.less';
import CircleLink from '../CircleLink/CircleLink';
import OvalLink from '../OvalLink/OvalLink';

interface IP5FrameProps {
    frameURL: string;
    links?: Website.ILink[];
    width?: string;
    height?: string;
    label?: string;
    scrolling?: boolean;
}

export default function P5Frame({
    frameURL,
    links,
    width,
    height,
    scrolling = false,
}: IP5FrameProps) {
    return (
        <div style={{ width, height }} className="p5-frame">
            <iframe scrolling={scrolling ? 'yes' : 'no'} src={frameURL} />
            <div className="p5-frame__links">
                {links &&
                    links.map(link => {
                        return <OvalLink link={link.url} label={link.label} />;
                    })}
            </div>
        </div>
    );
}
