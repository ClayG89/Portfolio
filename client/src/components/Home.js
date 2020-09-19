import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="homeContainer">
                <div className="header">
                  <div className="navBar1">
                      <div className="bar1Top">                         
                        <nav><div><a href="/Resume">Resume</a></div></nav>
                        <nav><div><a href="/Blog">Blog</a></div></nav>
                      </div>
                      <div className="bar1Bottom">
                          <p>placeholder</p>
                      </div>
                  </div>
                  <div className="logo1">
                      <img src="/CG_Logo6.png" width="300" alt="Logo"/>
                  </div>
                  <div className="navBar2">
                      <div className="bar2Top">
                        <nav><div><a href="/Contact">Contact Me</a></div></nav>
                        <nav><div><a href="/Projects">Projects</a></div></nav>
                        </div>
                        <div className="bar2Bottom">
                          <p>placeholder</p>
                      </div>
                  </div>                    
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
                <div className="aboutMe">
                    <div className="bioPic">
                        <img src="/testphoto1.jpeg" height="300" alt="test"/>
                    </div>
                    <div className="bio">
                        <p></p>
                    </div>
                </div>
                <div className="icons">
                    <div><p>© Background image courtesy of Travis Clark</p></div>
                    <div><p>Site created by Clayborn Guess using React, Django REST and PostgreSQL.</p></div>
                    <div><p>claybornguess@yahoo.com</p></div>
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
