import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div className="projectWrapper">
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
                    <nav><div><a href="/">Home</a></div></nav>
                    <nav><div><a href="/About_me">About Me</a></div></nav>
                    <nav><div><a href="/Blog">Blog</a></div></nav>
                    <nav><div><a href="/Contact">Contact Me</a></div></nav>
                </div>
                <div className="projectTitle">
                    <h1>Projects</h1>
                </div>
                <div className="projectImageWrapper">
                    <div className="projectImage1">
                        <img src="/jeopardy-image.jpg" alt="pic" width="250" height="150"></img>
                    </div>
                    <div className="projectImage2">
                        <img src="/Project2-Homepage.png" alt="pic" width="250" height="150"></img>
                    </div>
                    <div className="projectImage3">
                        <img src="/Clay's.png" alt="pic" width="250" height="150" ></img>
                    </div>
                    <div className="projectImage4">
                        <a href="https://project4c.herokuapp.com/">
                            <img src="/Project4_screenshot.png" alt="pic" width="250" height="150"></img>
                        </a>
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
