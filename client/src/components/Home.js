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
                          <h3>Phone: 404-200-0678</h3>
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
                          <h3>Email: clay@claybornguess.com</h3>
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
                        <img src="/CG_bio2.jpg" height="500" alt="test"/>
                    </div>
                    <div className="bio">
                        <h3>Clay...</h3>
                            <p>Clay is a full-stack softwart engineer skilled in both front-end and back-end development. He is a problem solver who is up for the challenge. His previous expereince as a business owner has given him the ability to focus under pressure and to understand the importance of deadlines. Currently he is working on a custom website that he created for a friend which will work as both a display gallery for her cosmetology business and an ecommerce site for her products.</p>
                    </div>
                </div>
                <div className="icons">
                    <div><p></p></div>
                    <div><p>Site created by Clayborn Guess using React, Django REST and PostgreSQL.</p></div>
                    <div><p></p></div>
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
