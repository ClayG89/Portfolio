import React, { Component } from 'react'
import axios from 'axios';
// import CommentList from './CommentList';
// import Comment from './Comment'



axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'



export default class Blog extends Component {

    state = {
        blog: [],
        // blogs: [],
        comments: [],
        newComment: {
        //    blog: '',
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
            // console.log(blogId)
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
        const blog =  this.props.match.params.id;
        const updatedNewComment = { ...this.state.newComment, blog };        
        updatedNewComment[event.target.name] = event.target.value;   
        this.setState({
            newComment: updatedNewComment,     
        }); 
    }
    submitCreateCommentList = (event) => {
        event.preventDefault();
        axios.post('/api/v1/comments/', this.state.newComment).then(() => {
            this.toggleCreateForm();
            this.getCommentList();
        });
    }
   


    render() {

        return (
            <div>


                <div>
                    <h2>{this.state.blog.title}</h2>
                </div>
                <div>
                    <p>{this.state.blog.post}</p>
                </div>

                <div>
                    <h2>Comments</h2>
                </div>

                <div>
                    {this.state.comments.map(comment => (
                        <div key={comment.id}>
                            <h4>{comment.name}</h4>
                            <p>{comment.body}</p>
                        </div>
                    ))}

                    <div>

                        <h3>Comment Here</h3>

                        <form onSubmit={this.updateCommentList}>

                            
                            {/* <div>
                                <input
                                name='blog'
                                value={this.state.blog.id}
                                onClick={this.updateCommentList} />
                                {this.state.blog.title} 
                            </div> */}
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    onChange={this.updateCommentList} />
                            </div>
                            
                            <div>
                                <textarea
                                    className="textarea"
                                    name="body"
                                    placeholder="Add a comment"
                                    onChange={this.updateCommentList}></textarea>
                            </div>

                            <button onClick={this.submitCreateCommentList}>Submit</button>

                        </form>

                    </div>
                </div>

            </div>
        );
    }
}