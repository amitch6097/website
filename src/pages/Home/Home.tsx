import React from 'react';
import P5Frame from '../../components/P5Frame/P5Frame';
import './Home.less';

export default function Home() {
    return (
        <div className="home-page">
            <div className="home-page__title">Andrew Mitchell</div>
            <div className="home-page__iframe">
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
            <header className="Sndrew-header">
                <div className="Sndrew-header__bio">
                    <div className="Sndrew-header__bio-name">
                        <h1 className="Sndrew-header__bio-first-name">
                            Andrew
                        </h1>
                        <h1 className="Sndrew-header__bio-last-name">
                            Mitchell
                        </h1>
                    </div>
                    <img
                        className="Sndrew-header__bio-image"
                        src="https://i.imgur.com/xtoLyW2.jpg"
                    />
                    <h2 className="Sndrew-header__bio-role">
                        Software Engineer
                    </h2>
                    <div className="Sndrew-header__bio-links">
                        <ul className="Sndrew-header__bio-links-list">
                            <li className="Sndrew-header__bio-links-list-item">
                                <a className="link-button">Projects</a>
                            </li>
                            <li className="Sndrew-header__bio-links-list-item">
                                <a
                                    className="link-button"
                                    href="https://github.com/amitch6097"
                                >
                                    Resume
                                </a>
                            </li>
                            <li className="Sndrew-header__bio-links-list-item">
                                <a
                                    className="link-button"
                                    href="https://github.com/amitch6097"
                                >
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
}
