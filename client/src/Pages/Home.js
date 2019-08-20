import React, { Component } from "react"
import Container from '../Components/Container'
// import InputBox from '../Components/InputBox'
import TextField from '@material-ui/core/TextField';
import DatePicker from '../Components/DatePicker'
// import CategoryInput from "../Components/CategoryInput"
import SubmitButton from "../Components/Button"
//import API from "../utils/API";
import axios from 'axios';
import ResultCard from "../Components/ResultCard"
import Geohash from 'latlon-geohash';
import TimePicker from "../Components/TimePicker";
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { red } from "@material-ui/core/colors";
// import Button from '@material-ui/core/Button';
// import { Link } from "react-router-dom"

// import Loader from "../Components/Loader"

var moment = require('moment');

const styles = {
    heading: {
        color: "white",
        textShadow: '2px 2px 1px #white',
        // fontFamily: 'abys', 
        fontFamily: "Anton, sans-serif",
        textAlign: "center",
        padding: "50px",
        letterSpacing: "2px",
        fontSize: '30px'
    }, 
    inputDiv:{
        marginBottom: "20px",
        
      },

    headingDiv: {
        background: "white"
    },
    button: {
        background: "#156172",
        color: "white ",
        // letterSpacing: '1px',
        // boxShaddow: "0px",
        // margin: "5px, 0px"

    },
    toolbarTitle: {
        flex: 1,
        fontFamily: 'Raleway',
        fontSize: "30px",
        color: 'black',
        marginBottom: '50px'

    },
    warning: {
        color: 'grey',
        fontFamily: 'Raleway',
        height: '150px',
        fontSize: '20px',
        textAlign: 'center'

    }

}

function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return (
      <div className="warning" style={styles.warning}>
        Sorry! We found no events matching your search criteria
      </div>
    );
  }

class Home extends Component {
    constructor() {
        super()
        this.state = {showWarning: true};
        this.state = {
            location: {
                lat: 0,
                lng: 0
            },
            events: [],
            eventSearched: "",
            eventLocationSearched: "",
            selectedDate: new Date(),
            geohash: 0,
            expanded: false,
            
        }
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let lat = position.coords.latitude
                let lng = position.coords.longitude

                const geohash = Geohash.encode(lat, lng, 6)
                console.log("latitude:" + lat + "longitude" + lng)
                console.log("grab geohash" + geohash)

                this.setState({
                    geohash: geohash,
                    location: {
                        lat: lat,
                        lng: lng
                    },
                    lat: lat,
                    lng: lng
                })
            }
        )
    }

  

    searchThruDatabase = (query, time) => {
        const request = { query, time}
        axios.post('/api/authorize', request) 
            // .then(res => res.json())
            .then((events) => {  
                var mainEvent = events.data.combine
                if (mainEvent[0] === null){
                    console.log('no events')
                    return this.setState(state => ({showWarning: !state.showWarning}))
                } else {
               console.log(mainEvent)
               return this.setState({
                   events: mainEvent
               }) 
                }
              
            })
        }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    };

    setSelectedDate = date => {
        this.setState({ selectedDate: date })
    }

    // showLoader = event =>{
        
    // }

    handleSubmit = event => {
        event.preventDefault()
        console.log("hitting search")
        this.searchThruDatabase(this.state.eventSearched, this.state.eventLocationSearched, moment(this.state.selectedDate).format('YYYY[-]MM[-]DDTHH:mm:ss'))
        console.log("event searched state ", this.state.eventSearched, "event date: ", moment(this.state.selectedDate).format('YYYY MM DDTHH:mm:ss'))
        console.log(this.state.eventLocationSearched)
    }

    render() {
        return (
            <Container>

                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    style={styles.toolbarTitle}
                >
                    Search for events
               </Typography>

               <div style={styles.inputDiv}>
                <TextField
                    id="inputLine"
                    name="eventSearched"
                    value={this.state.eventSearched}
                    placeholder="  i.e. festivals"
                    onChange={this.handleInputChange}
                    type="text"
                    fullWidth
                    margin="normal"
                    label="Event or Activity"
                    InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        )

                    }}
                    // variant="none"
                    style={{ margin: 0 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    

                />
                </div>





                <TextField
                                id="inputLine"
                                name="eventLocationSearched"
                                value={this.state.eventLocationSearched}
                                placeholder="San Diego, Los Angeles, Anaheim"
                                onChange={this.handleInputChange}
                                type="text"
                                fullWidth
                                label="City"
                                margin="normal"
                                // variant="outlined"
                                style={{ margin: 0 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    disableUnderline: true,

                                }}

                            //  label="eventSearch"
                            /> 




                 {/* <div className="row">
                    <div className="col m6"> */}


                        <DatePicker
                            id="inputLine"
                            selectedDate={this.state.selectedDate}
                            setSelectedDate={this.setSelectedDate}

                        /> 
                    {/* </div> */}

                    {/* <div className="col m6"> */}
                        <TimePicker
                            id="inputLine"
                            selectedDate={this.state.selectedDate}
                            setSelectedDate={this.setSelectedDate} /> 


                {/* <CategoryInput />

                       */}
                {/* </div>
                </div> */}
                <div className="row ">
                    <div className="col m12 center ">
                        <SubmitButton
                                 onClick={(event) => this.handleSubmit(event)}
                                 style={styles.button} className="center " />
                    </div>
                </div>
{/* 
                <div className="row center">
                    <div className="col m6">
                        <h6>Have an event to share with the world?</h6><br />
                        <Link
                            to="/event">
                            <Button
                                id="createEventBtn"
                                style={styles.button}>Create Event</Button>
                        </Link>
                    </div>
                </div> */}


                {/* <Loader></Loader> */}

                 {this.state.events.map(event => {
                    return (<ResultCard   
                        key={event.key}
                        expanded={this.state.expanded}
                        handleExpandClick={this.setExpanded}
                        handleUnExpandClick={this.setUnExpanded}
                        title={event.eventName}
                        dates={event.eventDateStart.start.localDate ? event.eventDateStart.start.localDate: event.eventDate}
                        time={event.eventDateStart.start.localTime}
                        image={event.eventImage[0].image.url}
                        note={event.eventNote}
                        description={event.eventDescription}
                        locationVenue={event.eventLocation.name}
                        locationName={event.eventLocation.address.line1}
                        locationAddress={event.eventLocation.address.line1}
                        locationCity={event.eventLocation.city.name}
                        locationPostalCode={event.eventLocation.postalCode}
                        locationState={event.eventLocation.state.name}
                        locationDistance={event.eventLocation.distance}
                        locationDistanceUnits={event.eventLocation.units}
                        tickets={event.eventLocation.url}
                    />
                    )
                })}
                 <WarningBanner warn= {this.state.showWarning} />


            </Container>

        )
    }

}

export default Home