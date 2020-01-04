import React from 'react';
import P5Frame from '../components/P5Frame/P5Frame';

export default function Home() {
    return (
        <div className="home-page">
            <div className="home-page__title">
                Andrew Mitchell
            </div>
            <div className="home-page__iframe">
                <P5Frame
                    width={'100%'}
                    height={'100%'}
                    frameURL={'https://editor.p5js.org/mitch702/embed/p6vC1kfsP'}
                    linkURL={'https://editor.p5js.org/mitch702/sketches/p6vC1kfsP'}
                />
            </div>
        </div>

    );
}
