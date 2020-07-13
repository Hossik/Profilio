import React from 'react';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';

export const BackgroundVideo = () => {
    const videoSource = "../assets/videoCover.mp4"
    return (
        <section className="landing" >
        
        <video autoPlay="autoplay" loop="loop" muted id="videoBG">
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
                <div className="landing-inner">
                <BrowserRouter >
                <div className='hoss'>
                    <Main/>
                </div>
                </BrowserRouter>
                
            </div>
       
    </section>



    )
}

export default BackgroundVideo