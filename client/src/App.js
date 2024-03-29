import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BlogList from "./components/BlogList";
import Blog from "./components/Blog";
import CommentList from "./components/CommentList";
import Comment from "./components/Comment";
import ContactList from "./components/ContactList";
import Contact from  "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects"
import About_me from "./components/About_me"
import "./App.css";

// document.querySelector('#blogPost').innerHTML = ""

class App extends Component {
  render() {
      return (
          <Router>
              <div className="App">

                  <div>
                      
                  </div>

                  <Switch>
                    
                    <Route exact path="/" component={ Home }/>

                    <Route exact path="/blog" component={ BlogList }/>

                    <Route path="/blog/:id" component={ Blog }/>

                    <Route exact path="/contact" component={ ContactList }/>

                    <Route path="/contact/:id" component={ Contact }/>

                    <Route exact path="/comment" component={ CommentList }/>

                    <Route path="/comment/:id" component={ Comment }/>

                    <Route exact path="/projects" component={ Projects }/>

                    <Route exact path="/About_me" component={ About_me }/>

                  </Switch>
              </div>
          </Router>
      )
  }
}

export default App;
