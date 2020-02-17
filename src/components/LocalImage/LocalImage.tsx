import React from 'react';

import * as Doggo from '../../../src/assets/images/doggo.png';

interface ILocalImageProps {
    className?: string;
    src: string;
    alt: string;
}

export default function LocalImage({ className, src, alt }: ILocalImageProps) {
    return (
        <img
            className={className}
            src={(src && '../../../src' + src) || Doggo.default}
            alt={alt}
        />
    );
}
