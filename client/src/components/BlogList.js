import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default class BlogList extends Component {
    state = {
        error: '',
        blogs: []
    }
    componentDidMount() {
        this.fetchBlogs();
    }

    fetchBlogs = async () => {
        try {
            const res = await axios.get('/api/v1/blogs/');
            this.setState({ blogs: res.data });
        }
        catch (err) {
            console.log(err)
            this.setState({ error: err.message })
        }
    }
    render() {
        if (this.state.error) {
            return <div>{this.state.error}</div>
        }
        return (
            <div className="blogListWrapper">
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
                <div className="blogListNav">
                    <nav><div><a href="/About_me">About Me</a></div></nav>
                    <nav><div><a href="/">Home</a></div></nav>
                    <nav><div><a href="/Contact">Contact Me</a></div></nav>
                    <nav><div><a href="/Projects">Projects</a></div></nav>
                </div>
                <div className="blogListMain">
                    <div className="blogListLink">
                        <h1>Blogs</h1>
                        {this.state.blogs.map(blog => (
                            <div key={blog.id}>
                                <Link to={`/blog/${blog.id}`} >{blog.title}</Link>
                            </div>
                        ))}
                    </div>
                    <div className="excerpt1">
                        <p>"Gobbledygook!"</p>
                    </div>
                    <div className="excerpt2">
                        <p>"More Gobbledygook!"</p>
                    </div>
                    <div className="excerpt3">
                        <p>"Even more Gobbledygook!"</p>
                    </div>
                    <div className="excerpt4">
                        <p>"Ok, this is geting ridiculous."</p>
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
        );
    }
}
