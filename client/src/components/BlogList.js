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
                <div className="header">
                  <div className="navBar1">
                      <div className="bar1Top">                         
                        <nav><div><a href="/Resume">Resume</a></div></nav>
                        <nav><div><a href="/">Home</a></div></nav>
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
                <div className="blogListMain">
                    <div className="blogListLink">
                        <div className="title">
                        <h1>Blogs</h1>
                        </div>
                        {this.state.blogs.map(blog => (
                            <div key={blog.id}>
                                <Link to={`/blog/${blog.id}`} >{blog.title}</Link>
                            </div>
                        ))}
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
