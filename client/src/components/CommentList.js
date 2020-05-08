import React, { Component } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default class CommentList extends Component {
    state = {
        error: '',
        blog: [],
        comments: [],
        newComment: {}

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
        const updatedNewComment = { ...this.state.newComment };
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
    componentDidMount() {
        this.getCommentList()
        
    }
 

        render() {
            return (
                <div>



                    <div>
{/* 
                        {
                            this.state.comments.map(comment => (

                                    <div key={comment.id}>
                                        <div>
                                            <h4>{comment.name}</h4>
                                        </div>
                                        <div>
                                            <p>{comment.body}</p>
                                        </div>
                                    </div>
                                )
                                
                            )} */}
                        
                    </div>
                    <h3>Comment Here</h3>
                    <form onSubmit={this.updateComment}>
                        <div>
                            <input type="text" name="name" placeholder="Your name" onChange={this.updateComment} />
                        </div>
                        <div>
                            <textarea className="textarea" name="body" placeholder="Add a comment" onChange={this.updateComment}></textarea>
                        </div>

                        <button onClick={this.submitCreateComment}>Submit</button>

                    </form>
                </div>
            )
        }
    }

