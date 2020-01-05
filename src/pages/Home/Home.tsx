import React from 'react';
import './Home.less';

import P5Frame from '../../components/P5Frame/P5Frame';
import Bio from '../../components/Bio/Bio';
import Projects from 'src/components/Projects/Projects';

export default function Home() {
    const [modalOpen, setModalOpen] = React.useState(false);
    return (
        <div className="home-page">
            <div
                style={{ display: modalOpen ? 'flex' : 'none' }}
                className="home-page__modal home-page__section"
            >
                Modal
                <button onClick={() => setModalOpen(false)}>Close</button>
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
                    onClick={() => setModalOpen(true)}
                    projects={[
                        {
                            label: '1',
                            url: 'google.com',
                            img: 'https://i.imgur.com/xtoLyW2.jpg',
                        },
                        {
                            label: '1',
                            url: 'google.com',
                            img: 'https://i.imgur.com/xtoLyW2.jpg',
                        },
                        {
                            label: '1',
                            url: 'google.com',
                            img: 'https://i.imgur.com/xtoLyW2.jpg',
                        },
                        {
                            label: '1',
                            url: 'google.com',
                            img: 'https://i.imgur.com/xtoLyW2.jpg',
                        },
                        {
                            label: '1',
                            url: 'google.com',
                            img: 'https://i.imgur.com/xtoLyW2.jpg',
                        },
                        {
                            label: '1',
                            url: 'google.com',
                            img: 'https://i.imgur.com/xtoLyW2.jpg',
                        },
                        {
                            label: '1',
                            url: 'google.com',
                            img: 'https://i.imgur.com/xtoLyW2.jpg',
                        },
                        {
                            label: '1',
                            url: 'google.com',
                            img: 'https://i.imgur.com/xtoLyW2.jpg',
                        },
                    ]}
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
