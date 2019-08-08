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
 
class UserPage extends Component {
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

  componentDidMount(props){
    var userPageInfo = this.props.match.params.username
    console.log(userPageInfo)
     fetch(`/api/user/${userPageInfo}`, {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' },
        }).then(response => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(data =>{
            console.log(data)
            this.setState({
              username: data.username,
              image: data.image});
        }).catch((err) => {
            console.log(err)
        });
       
      }

   render() {
     return (
       <Container>
         {/* <h3>user home page</h3> */}
         <div className="row">
           <div className="col-sm-4">
             <UserCard
             image={this.state.image}
             />
             <h3 style={styles.cardTitle}>{this.state.username}</h3>

             <Link to="/">
               <SearchButton style={styles.button} />
             </Link>
           </div>
           <div className="col-sm-8">
             <TabPanel />
           </div>
         </div>

       </Container>
  );
  }
}

export default UserPage;

//         {/* <h5>My Events:</h5> */}
//         {/* <div className="card-columns"> */}
//         {/* <ResultCard /> */}
//         {/* posted evets */}
//         {/* {this.state.postedEvents.map(event => {
//             return (
//               <ResultCard
//                 title={favEvents.name}
//                 dates={event.dates.start.localDate}
//                 image={event.images[0].url}
//                 note={event.pleaseNote}
//                 key={event.id}
//                 locationName={event._embedded.venues[0].name}
//                 locationAddress={event._embedded.venues[0].address.line1}
//                 locationCity={event._embedded.venues[0].city.name}
//                 locationState={event._embedded.venues[0].state.name}
//               />
//             );
//           })} */}
//         {/* </div> */}
//         {/* <h5>Saved Events:</h5> */}
//         {/* <div className="card-columns"> */}
//         {/* saved/favorite evets */}
//         {/* <ResultCard /> */}
//         {/* {this.state.favEvents.map(event => {
//             return (
//               <ResultCard
//                 title={favEvents.name}
//                 dates={event.dates.start.localDate}
//                 image={event.images[0].url}
//                 note={event.pleaseNote}
//                 key={event.id}
//                 locationName={event._embedded.venues[0].name}
//                 locationAddress={event._embedded.venues[0].address.line1}
//                 locationCity={event._embedded.venues[0].city.name}
//                 locationPostalCode={event._embedded.venues[0].postalCode}
//                 locationState={event._embedded.venues[0].state.name}
//                 locationDistance={event._embedded.venues[0].distance}
//                 locationDistanceUnits={event._embedded.venues[0].units}
//               />
//             );
//           })} */}
         {/* </div> */}