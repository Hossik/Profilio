import React from 'react';
import classes from './BackgroundVideo.module.css';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';

const BackgroundVideo = () => {
    const videoSource = "../assets/videoCover.mp4"
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                
                <BrowserRouter >
                <div className='hoss'>
                    <Main/>
                </div>
                </BrowserRouter>
                
            </div>
        </div>
    )
}

export default BackgroundVideo