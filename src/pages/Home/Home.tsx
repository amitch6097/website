import React from 'react';

import HomePage from './HomePage';
import { HomeContextProvider } from './context/HomeContext';

export default function Home(props) {
    return (
        <HomeContextProvider>
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
