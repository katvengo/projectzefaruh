import React, { Component } from "react";
import Home from "./Pages/Home"
import Nav from "./Components/Nav"
import "./App.css";
import FooterBar from "./Components/Footer"
//import { ThemeProvider } from '@material-ui/styles';

// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
// import Button from '@material-ui/core/Button';


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserPage from "./Pages/UserPage";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Event from "./Pages/Event";
require('dotenv').config()


class App extends Component {

  render() {

    
    return (
      
    <Router>

    
        <header>
        <Nav/>
        </header>
        <main>
        <Switch>

      <Route exact path="/" component={Home} /> 
      <Route exact path ="/signUp" component= {SignUp}/>
      <Route exact path ="/signIn" component= {SignIn}/>
      <Route exact path='/user/:username' component={UserPage} />
      <Route exact path ="/event" component= {Event}/>
  
      <Home/>

      </Switch>
      </main>
      <footer>
      <FooterBar/>
      </footer>
     
    </Router>

    );
  }
}

export default App;
