import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="homewrapper">
                <div className="logowrapper">
                    <div className="logoinit">
                        <h1>CG</h1>
                    </div>
                    <div className="logofn">
                        <h4>Clayborn</h4>
                    </div>
                    <div className="logoln">
                        <h4>Guess</h4>
                    </div>
                </div>

                <div className="homenav">
                    <nav><div><a href="/About">About Me</a></div></nav>
                    <nav><div><a href="/Blog">Blog</a></div></nav>
                    <nav><div><a href="/Contact">Contact Me</a></div></nav>
                    <nav><div><a href="/Projects">Projects</a></div></nav>
                </div>
                <div className="brandStatement1">
                    <div className="quote1">
                        <p>“If you can't fly then run,
                        if you can't run then walk,
                        if you can't walk then crawl,
                        but whatever you do you have to keep moving forward.”</p>
                        <p>― Martin Luther King Jr.</p>

                    </div>
                </div>
                <div className="icons">
                    <div><p>© Background image courtesy of Travis Clark</p></div>
                    <div><p>Site created by Clayborn Guess using React, Django REST and PostgreSQL.</p></div>
                    <div className="facebookIcon">
                        <img src="/facebook-icon.png" width="35px" alt=""></img>
                    </div>
                    <div className="linkedinIcon">
                        <img src="/linkedin-icon.jpg" width="35px" alt=""></img>
                    </div>
                    <div className="instagramIcon">
                        <img src="/instagram-icon.png" width="35px" alt=""></img>
                    </div>
                    <div className="twitterIcon">
                        <img src="/twitter-icon.png" width="35px" alt=""></img>
                    </div>
                </div>
            </div>
        )
    }
}
