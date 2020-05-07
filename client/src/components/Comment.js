import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default class Comment extends Component {
        state = {
            comment: {},
            comments: [],  
        }

        
        componentDidMount() {
            const commentId = this.props.match.params.id;
            this.fetchComment(commentId)
        }
        
        fetchComment = async (commentId) => {
            try {
                const commentResponse = await axios.get(`/api/v1/comments/${commentId}/?format=json`)
                this.setState({
                    comment: commentResponse.data,
                    
                })
            }
            catch (error) {
                console.log(error)
                this.setState({error: error.message})
            }
            console.log(this.componentDidMount)
        }
      
        
    render() {
        return (
            <div>
                {/* <h3>{this.state.comment.name}</h3>
                <p>{this.state.comment.body}</p> */}
            </div>
        )
    }
}