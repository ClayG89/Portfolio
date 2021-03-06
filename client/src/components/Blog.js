import React, { Component } from 'react'
import axios from 'axios'

// import { renderToStaticMarkup } from 'react-dom/server'
// import parse, { domToReact } from 'html-react-parser'
// import { Link, RichText, Date } from 'prismic-reactjs';




axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'



export default class Blog extends Component {

    state = {
        blog: [],
        comments: [],
        newComment: {
        },
    }

    componentDidMount() {
        const blogId = this.props.match.params.id;
        this.fetchBlog(blogId)
        this.getCommentList()
    }

    fetchBlog = async (blogId) => {
        try {
            const blogResponse = await axios.get(`/api/v1/blogs/${blogId}/`)
            this.setState({
                blog: blogResponse.data,
                comments: blogResponse.data.comments,
            })
        }
        catch (error) {
            console.log(error)
            this.setState({ error: error.message })
        }
    }

    getCommentList = () => {
        axios.get('/api/v1/comments/').then((response) => {
            const foundComment = response.data;
            this.setState({
                comments: foundComment
            })
        })
    }
    toggleCreateForm = () => {
        const newShowCreateForm = !this.state.showCreateForm;
        this.setState({
            showCreateForm: newShowCreateForm,
        });
    }

    updateCommentList = (event) => {
        const blog = this.props.match.params.id;
        const updatedNewComment = { ...this.state.newComment, blog };
        updatedNewComment[event.target.name] = event.target.value;
        this.setState({
            newComment: updatedNewComment,
        });
    }
    submitCreateCommentList = (event) => {
        let txt = "";
        event.preventDefault();
        axios.post('/api/v1/comments/', this.state.newComment).then(() => {
            this.toggleCreateForm();
            this.getCommentList();
            document.getElementById("myForm").reset();
            document.getElementById("myForm").innerHTML = txt;
            // window.location.replace('/blog');

        });
    }


    render() {

        return (
            <div className="blogWrapper">

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
                        <img src="/CG_Logo6.png" width="300" alt="Logo" />
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
                <div className="image1">
                    <div className="blogTitle">
                        <h2>{this.state.blog.title}</h2>
                    </div>
                </div>
                <div className="blogMain">
                    <div className="blog">
                        <div className="align">
                            {/* <div className="back">
                                <a href="/Blog">
                                    <img src="/backbutton5.jpeg" width="55" height="45" alt="back"></img>
                                </a>
                            </div> */}
                        </div>
                        <div></div>
                        <div id="blogpost" className="blogPost">
                            <div dangerouslySetInnerHTML={{ __html: this.state.blog.post }} />
                        </div>
                    </div>
                </div>
                <div className="formWrapper">
                    <div>
                        <form id="myForm" onSubmit={this.updateCommentList}>
                            <fieldset>
                                <legend>Comment Here</legend>
                                <div className="nameInput">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        onChange={this.updateCommentList} />
                                </div>
                                <div className="textArea">
                                    <textarea
                                        className="textarea"
                                        name="body"
                                        placeholder="Add a comment"
                                        onChange={this.updateCommentList}></textarea>
                                </div>
                                <button onClick={this.submitCreateCommentList}>Submit</button>
                            </fieldset>
                        </form>
                    </div>
                    <div className="enteredComments">
                        <h2>Comments</h2>
                        {this.state.comments.map(comment => (
                            <div key={comment.id}>
                                <h4>{comment.name}</h4>
                                <p>{comment.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="icons2">
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
        );
    }
}