import React from 'react';
import './Tags.less';
import OvalLink from '../../../../components/OvalLink/OvalLink';
import { HomeContext } from '../../context/HomeContext';

export default function Tags() {
    const { tags, tag: currentTag, onSetTag } = React.useContext(HomeContext);

    return (
        <div className="tags">
            {tags &&
                tags.map(tag => {
                    const selected =
                        currentTag && tag.label === currentTag.label;
                    return (
                        <div key={tag.label} className={`tags__tag`}>
                            <OvalLink
                                selected={selected}
                                label={tag.label}
                                onClick={() => onSetTag(tag)}
                            />
                        </div>
                    );
                })}
        </div>
    );
}
