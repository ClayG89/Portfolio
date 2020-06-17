import React, { Component } from 'react'

export default class About_me extends Component {
    render() {
        return (
            <div className="aboutWrapper">
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
                <div className="aboutNav">
                        <nav><div><a href="/">Home</a></div></nav>
                        <nav><div><a href="/Blog">Blog</a></div></nav>
                        <nav><div><a href="/Contact">Contact Me</a></div></nav>
                        <nav><div><a href="/Projects">Projects</a></div></nav>
                    </div>

            </div>
        )
    }
}
