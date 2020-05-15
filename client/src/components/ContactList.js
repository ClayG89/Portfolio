import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


export default class ContactList extends Component {
    state = {
        error: '',
        contactlist: [],
        newContact: {}
    }
    getContactList = () => {
        axios.get('/api/v1/contacts/').then((response) => {
            const foundContact = response.data;
            this.setState({
                contactlist: foundContact
            })
        })
    }
    toggleCreateForm = () => {
        const newShowCreateForm = !this.state.showCreateForm;
        this.setState({
            showCreateForm: newShowCreateForm,
        });
    }
    updateContactList = (event) => {
        const updatedNewContactList = { ...this.state.newContact };
        updatedNewContactList[event.target.name] = event.target.value;
        this.setState({
            newContact: updatedNewContactList,
        });
    }
    submitCreateContactList = (event) => {
        event.preventDefault();
        axios.post('/api/v1/contacts/', this.state.newContact).then(() => {
            this.toggleCreateForm();
            this.getContactList();
        });
        console.log(this.state.newContact)
    }
    componentDidMount() {
        this.getContactList()
    }
    render() {
        return (
            <div>

                <h2>Contact Me</h2>

                <div>

                    {
                        this.state.contactlist.map((contact, i) => {
                            return (

                                <div key={ i }>
                                    <Link to={`/contact/${contact.id}`}>{contact.company}</Link>
                                </div>

                            )
                        })
                    }
                </div>
                <form onSubmit={this.updateContactList}>
                    <div>
                        <h4>First Name</h4>
                        <input type="text" name="firstname" onChange={this.updateContactList} />
                    </div>
                    <div>
                        <h4>Last Name</h4>
                        <input type="text" name="lastname" onChange={this.updateContactList} />
                    </div>
                    <div>
                        <h4>Company</h4>
                        <input type="text" name="company" onChange={this.updateContactList} />
                    </div>
                    <div>
                        <h4>Phone</h4>
                        <p>please place +1 before number</p>
                        <input type="tel" name="phone"  defaultValue="+1" onChange={this.updateContactList} />
                    </div>
                    <div>
                        <h4>email</h4>
                        <input type="email" name="email"  onChange={this.updateContactList} />
                    </div>
                    <div>
                        <h4>Subject</h4>
                        <input type="text" name="topic" onChange={this.updateContactList} />
                    </div>
                    <div>
                        <h4>Message</h4>
                        <textarea className="textarea" name="message" placeholder="Add a comment" onChange={this.updateContactList}></textarea>
                    </div>


                    <button onClick={this.submitCreateContactList}>Submit</button>
                </form>
            </div>
        )
    }
}