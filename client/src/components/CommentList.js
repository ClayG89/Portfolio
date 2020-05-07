import React, { Component } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default class CommentList extends Component {
    state = {
        error: '',
        commentlist: [],
        newComment: {
            body: '',
            name: '',
        }

    }
    getCommentList = () => {
        axios.get('/api/v1/comments/').then((response) => {
            const foundComment = response.data;
            this.setState({
                commentlist: foundComment
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
        const updatedNewComment = { ...this.state.newComment};
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
            
            <h2>Comments</h2>

            <div>
               
               {
                   this.state.commentlist.map((comment, i) => {
                       return (

                           <div key={ i }>
                                <div>
                                    {comment.name}
                                </div>
                                <div>
                                   {comment.body}
                                 </div>  
                           </div>
                       // <Truck truck={ truck } key={ i }
                       // submitCreateTruckList={this.submitCreateTruckList}
                       // changeInputTruckList={this.changeInputTruckList}/>
                       )
                   })
               }
               </div>
               <h3>Comment Here</h3>
                <form onSubmit={this.updateComment}>
                    <div>
                            <input type="text" name="name" placeholder="Your name" onChange={ this.updateComment }/>                        
                    </div>
                    <div>                        
                            <textarea className="textarea" name="body" placeholder="Add a comment" onChange={ this.updateComment }></textarea>
                    </div>
                    
                            <button onClick={this.submitCreateComment}>Submit</button>
                   
                </form>    
            </div>
        )
    }
}

