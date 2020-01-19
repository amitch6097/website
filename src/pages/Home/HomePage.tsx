import React from 'react';
import './HomePage.less';
import P5Frame from '../../components/P5Frame/P5Frame';
import Bio from './components/Bio/Bio';
import Projects from 'src/pages/Home/components/Projects/Projects';
import ProjectModal from './components/ProjectModal/ProjectModal';
import OvalLink from '../../components/OvalLink/OvalLink';
import Tags from './components/Tags/Tags';

import useDarkMode from './hooks/useDarkMode';

import { HomeContext } from './context/HomeContext';

export default function Home() {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const { projectModalOpen } = React.useContext(HomeContext);
    return (
        <div className={`home-page ${darkMode ? 'dark-mode' : ''}`}>
            <div className="home-page__dark-mode-button">
                <OvalLink onClick={toggleDarkMode} label="Toggle Dark Mode" />
            </div>
            <div
                style={{ display: projectModalOpen ? 'flex' : 'none' }}
                className="home-page__modal home-page__section"
            >
                {projectModalOpen && <ProjectModal />}
            </div>

            <div className="home-page__header">
                <div className="home-page__header-iframe">
                    <P5Frame
                        width={'100%'}
                        height={'100%'}
                        label={'10PRINT'}
                        frameURL={
                            'https://editor.p5js.org/mitch702/embed/p6vC1kfsP'
                        }
                        linkURL={
                            'https://editor.p5js.org/mitch702/sketches/p6vC1kfsP'
                        }
                    />
                </div>
                <div className="home-page__header-bio">
                    <Bio />
                </div>
            </div>

            <div className="home-page__section section-projects">
                <h2>Projects</h2>
                <Tags />
                <Projects />
            </div>

            <div className="home-page__section section-weather">
                <P5Frame
                    width={'100%'}
                    height={'100%'}
                    frameURL={
                        'https://editor.p5js.org/mitch702/present/yZi0E0N4i'
                    }
                />
            </div>
        </div>
    );
}
