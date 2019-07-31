import React, { Component } from "react";
import Container from "../Components/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import SearchButton from "../Components/Button";
import { Link } from "react-router-dom";
import ResultCard from "../Components/ResultCard";
import UserCard from "../Components/UserCard";
// import TextField from '@material-ui/core/TextField'

class UserPage extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      locationCity: "",
      favEvents: []
    };
  }

  render() {
    return (
      <Container>
        <h2> this is the user home page</h2>
        <div className="row">
          <div className="col m4">
            <UserCard />
          </div>
        </div>
        <Link to="/">
          <SearchButton />
        </Link>

        <h3>saved events:</h3>
        <div className="card-columns">
          {/* saved evets */}
          {/* {this.state.favEvents.map(event => {
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
          })} */}
        </div>

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
