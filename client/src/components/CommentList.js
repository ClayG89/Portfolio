import React, { Component } from 'react'
import axios from 'axios'
// import Comment from './Comment'
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
                    </div>
                    <h3>Comment Here</h3>
                   
                    <form onSubmit={this.updateCommentList}>
                        <div>
                            <input type="text" name="name" placeholder="Your name" onChange={this.updateCommentList} />
                        </div>
                        <div>
                            <textarea className="textarea" name="body" placeholder="Add a comment" onChange={this.updateCommentList}></textarea>
                        </div>

                        <button onClick={this.submitCreateCommentList}>Submit</button>

                    </form>
                </div>
            )
        }
    }

