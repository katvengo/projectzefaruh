import React, { Component } from "react";
import Container from "../Components/Container";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Avatar from "@material-ui/core/Avatar";
import SearchButton from "../Components/Button";
import { Link } from "react-router-dom";
// import ResultCard from "../Components/ResultCard";
import UserCard from "../Components/UserCard";
import TabPanel from "../Components/TabPanel";
// import { makeStyles } from "@material-ui/styles";
// import TextField from '@material-ui/core/TextField'

const styles = {
  button: {
    background: "#769A75",
    color: "#d9d9d9",
    //opacity: "50%",
    // fontFamily: 'Lora, serif',
    letterSpacing: "1px"
  }
};


class PublicPage extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      locationCity: "",
      postedEvents: [],
      favEvents: []
    };
  }

  componentDidMount(){
    fetch("/api/user", {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userInfo)
    }).then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function() {
        window.location.replace("/api/event");
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
            name={this.props.name} />
            <Link to="/">
              <SearchButton style={styles.button} />
            </Link>
          </div>
          <div className="col-sm-8">
            <TabPanel />
          </div>
        </div>

        <h5>My Events:</h5> 
       <div className="card-columns"> 
       <ResultCard /> 
     {/* Posted Events */}
       {this.state.postedEvents.map(event => {
            return (
              <ResultCard
                title={favEvents.name}
                dates={event.dates.start.localDate}
                image={event.images[0].url}
                note={event.pleaseNote}
                key={event.id}
                locationName={event._embedded.venues[0].name}
                locationAddress={event._embedded.venues[0].address.line1}
                locationCity={event._embedded.venues[0].city.name}
                locationState={event._embedded.venues[0].state.name}
              />
            );
          })} 
        </div> 
        <h5>Saved Events:</h5> 
        <div className="card-columns"> 
        {/* saved/favorite evets  */}
        <ResultCard /> 
        {this.state.favEvents.map(event => {
            return (
              <ResultCard
                title={favEvents.name}
                dates={event.dates.start.localDate}
                image={event.images[0].url}
                note={event.pleaseNote}
                key={event.id}
                locationName={event._embedded.venues[0].name}
                locationAddress={event._embedded.venues[0].address.line1}
                locationCity={event._embedded.venues[0].city.name}
                locationPostalCode={event._embedded.venues[0].postalCode}
                locationState={event._embedded.venues[0].state.name}
                locationDistance={event._embedded.venues[0].distance}
                locationDistanceUnits={event._embedded.venues[0].units}
              />
            );
          })} 
        </div>
      </Container>
    );
  }
}

export default PublicPage;
