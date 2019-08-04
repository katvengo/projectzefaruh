import React, { Component } from "react";
import Container from "../Components/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import SearchButton from "../Components/Button";
import { Link } from "react-router-dom"
// import TextField from '@material-ui/core/TextField'

class UserPage extends Component {
  handleClick = event => {
    event.preventDefault()
    console.log("Clicked");

  };

  render() {
    return (
      <Container>
        <h2>User Home Page</h2>
        {/* user info */}
        <Card>
          <CardContent>
            <Avatar
              alt="user avatar"
              src="https://png.pngtree.com/svg/20161027/631929649c.svg"
            />
            <h6>user card</h6>
            <p>name, info, whatever...</p>
          </CardContent>
        </Card>

        <Link to="/components.html"><SearchButton /></Link>
        
        <h3>saved events:</h3>
        {/* saved evets */}
        <h2> this page needs to:</h2>
        <ul>
          <li>show saved events</li>
          <li>allow the user to post events</li>
          <li>search events?</li>
        </ul>
      </Container>
    );
  }
}

export default UserPage;
