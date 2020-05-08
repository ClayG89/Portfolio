import React, { Component } from 'react'
import axios from 'axios';
// import Comment from './Comment'
import CommentList from './CommentList';


axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default class Blog extends Component {
    state = {
        blog: [],
        comments: [],
}

componentDidMount() {
    const blogId = this.props.match.params.id;
    this.fetchBlog(blogId)
    
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
        this.setState({error: error.message})
    }
}

render() {
    // console.log(this.state.comments)
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
                    <div key={ comment.id }>
                        <h4>{ comment.name }</h4>
                        <p>{ comment.body }</p>
                    </div>
                ))}
                <div>
                    <CommentList />
                </div>
            </div>
            
        </div>
    );
}
}