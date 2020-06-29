import React, { Component } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'


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
        // let txt = "";
        event.preventDefault();
        axios.post('/api/v1/contacts/', this.state.newContact).then(() => {
            this.toggleCreateForm();
            this.getContactList();
            // document.getElementById("myForm2").reset();
            setTimeout(alert('Submitted successfully'), window.location.replace('/'));
            // window.location.replace('/');
            // document.getElementById("myForm2").innerHTML = txt; 
              
            
        });
        console.log(this.state.newContact)
    }
    componentDidMount() {
        this.getContactList()
    }
    render() {
        return (
            <div className="contactWrapper">
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
                <div className="contactNav">
                    <nav><div><a href="/About">About Me</a></div></nav>
                    <nav><div><a href="/">Home</a></div></nav>
                    <nav><div><a href="/Blog">Blog</a></div></nav>
                    <nav><div><a href="/Projects">Projects</a></div></nav>
                </div>
                <div className="contactTitle">
                    <h2>Contact Me</h2>
                </div>

                <form  id="myForm2" onSubmit={this.updateContactList}>
                        <div className="columnWrapper">
                    <div className="formWrapper2">
                            <div className="columnWrapper1">
                            <div className="firstName">
                                <input type="text" className="firstNameField" name="firstname" placeholder="First Name" onChange={this.updateContactList} />
                            </div>
                            <div className="lastName">
                                <input type="text" className="lastNameField" name="lastname" placeholder="Last Name" onChange={this.updateContactList} />
                            </div>
                            <div className="subject">
                                <input type="text" className="subjectField" name="topic" placeholder="Subject" onChange={this.updateContactList} />
                            </div>
                            </div>
                            <div className="columnWrapper2">
                            <div className="company">
                                <input type="text" className="companyField" name="company" placeholder="Company" onChange={this.updateContactList} />
                            </div>
                            <div className="email">
                                <input type="email" className="emailField" name="email" placeholder="Email" onChange={this.updateContactList} />
                            </div>
                            <div className="phone">
                                <input type="tel" className="phoneField" name="phone" placeholder="Phone" onChange={this.updateContactList} />
                                <p className="warning">Insert +1 before number</p>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="textArea2" rows="10" cols="50">
                            <textarea className="textarea" name="message" placeholder="Add a comment" onChange={this.updateContactList}></textarea>
                        <div className="contactButton">
                            <button onClick={this.submitCreateContactList}>Submit</button>
                        </div>
                    </div>
                </form>
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
        )
    }
}