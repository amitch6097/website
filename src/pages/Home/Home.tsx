import React from 'react';
import './Home.less';

import P5Frame from '../../components/P5Frame/P5Frame';
import Bio from '../../components/Bio/Bio';
import Projects from 'src/components/Projects/Projects';
import Modal from '../../components/Modal/Modal';

const PROJECTS: Website.IProject[] = [
    {
        label: '1',
        tags: [
            {
                label: 'p5',
            },
            {
                label: 'JavaScript',
            },
        ],
        image: 'https://i.imgur.com/xtoLyW2.jpg',
        links: [
            {
                label: 'First Link',
                url: 'google.com',
            },
            {
                label: 'Next Link',
                url: 'google.com',
            },
        ],
        description:
            'AFKNALSNAGK vsa vksl df alkdfalkagd klsfad mkafm dfkl adfk aflkdkl afkl afkdl ',
        url: 'google.com',
        images: [
            'https://i.imgur.com/xtoLyW2.jpg',
            'https://i.imgur.com/xtoLyW2.jpg',
            'https://i.imgur.com/xtoLyW2.jpg',
        ],
    },
];

export default function Home() {
    const [project, setProject] = React.useState(undefined);
    const modalOpen = Boolean(project);
    return (
        <div className="home-page">
            <div
                style={{ display: modalOpen ? 'flex' : 'none' }}
                className="home-page__modal home-page__section"
            >
                {modalOpen && (
                    <Modal
                        onCloseModal={() => setProject(undefined)}
                        project={project}
                        projects={PROJECTS}
                    />
                )}
            </div>

            <div className="home-page__header">
                <div className="home-page__header-iframe">
                    <P5Frame
                        width={'100%'}
                        height={'100%'}
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

            <div className="home-page__section">
                Projects
                <Projects
                    onClick={project => setProject(project)}
                    projects={PROJECTS}
                />
            </div>

            <div className="home-page__section">
                <P5Frame
                    width={'100%'}
                    height={'100%'}
                    frameURL={
                        'https://editor.p5js.org/mitch702/present/yZi0E0N4i'
                    }
                    linkURL={
                        'https://editor.p5js.org/mitch702/sketches/yZi0E0N4i'
                    }
                />
            </div>
        </div>
    );
}
