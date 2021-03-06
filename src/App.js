import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './utility/NavBar/Navbar';
import Modal from './utility/Modal/Modal';
import Home from './pages/Home/Home';
import SingleFullVenue from '../src/pages/SingleFullVenue/SingleFullVenue';
// import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Navbar} />
        <Route exact path="/" component={Home} />
        <Route exact path="/venue/:vid" component={SingleFullVenue} />
        <Route path="/" component={Modal} />
      </Router>
    );
  }
}

export default App;
