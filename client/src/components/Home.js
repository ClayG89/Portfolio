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
                <div className="home3">main</div>
                <div className="home4">
                    <p>footer</p>
                </div>   
            </div>
        )
    }
}
