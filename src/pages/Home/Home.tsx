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
