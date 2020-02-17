import React from 'react';

import HomePage from './HomePage';
import { HomeContextProvider } from './context/HomeContext';

export default function Home(props) {
    const {projectId} = props?.match?.params ?? {}
    return (
        <HomeContextProvider projectId={projectId}>
            <HomePage {...props} />
        </HomeContextProvider>
    );
}

/**
 * @TODO
 *
 * Modal Below 800px wide design
 * Projects Grid Css
 * Large View Projects overlap and in Modal Project too
 * Contact
 * Spring Animations
 * Dark Mode
 */
