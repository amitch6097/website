import React, { useEffect } from 'react';

const KEY = 'dark-mode';

export default function useDarkMode() {
    const [darkMode, setDarkMode] = React.useState(false);

    useEffect(() => {
        if (localStorage) {
            const darkMode = localStorage.getItem(KEY) === 'true';
            setDarkMode(darkMode);
        }
    }, []);

    useEffect(
        () => {
            if (localStorage) {
                localStorage.setItem(KEY, darkMode ? 'true' : 'false');
            }
        },
        [darkMode]
    );

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return { darkMode, toggleDarkMode };
}
