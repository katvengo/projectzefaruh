import React, { Component } from "react";
import Container from "../Components/Container";
// import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import Avatar from "@material-ui/core/Avatar";
import SearchButton from "../Components/Button";
import { Link } from "react-router-dom";
// import ResultCard from "../Components/ResultCard";
import UserCard from "../Components/UserCard";
import TabPanel from "../Components/TabPanel";
import { mergeClasses } from "@material-ui/styles";
// import { makeStyles } from "@material-ui/styles";
// import TextField from '@material-ui/core/TextField'

const styles = {
  button: {
    background: "#156172",
    color: "white",
    //opacity: "50%",
    // fontFamily: 'Lora, serif',
    letterSpacing: "1px"
  },
  cardTitle:{
    fontSize: "25px",
    fontWeight: "500",
    textAlign: 'center',
    color: '#156172'

  }
};
 
class NoMatch extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      image: ''
      // title: '',
      // username: '',
      // locationCity: "",
      // createdEvents: [],
      // favoritedEvents: []
    };

  }

//   componentDidMount(props){
//     var userPageInfo = this.props.match.params.username
//     console.log(userPageInfo)
//      fetch(`/api/user/${userPageInfo}`, {
//               method: 'GET',
//               headers: { 'Content-Type': 'application/json' },
//         }).then(response => {
//             if (response.status >= 400) {
//                 throw new Error("Bad response from server");
//             }
//             return response.json();
//         }).then(data =>{
//             console.log(data)
//             this.setState({
//               username: data.username,
//               image: data.image});
//         }).catch((err) => {
//             console.log(err)
//         });
       
//       }

   render() {
     return (
       <Container>
      
        <span>I'm sorry, no user was found</span>

       </Container>
  );
  }
}

export default NoMatch;
