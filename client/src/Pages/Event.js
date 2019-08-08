import React, { Component } from "react"
import Container from '../Components/Container'
import TextField from '@material-ui/core/TextField';
import DatePicker from '../Components/DatePicker'
// import CategoryInput from "../Components/CategoryInput"
// import axios from 'axios';
import TimePicker from "../Components/TimePicker";
//var moment = require('moment');
import Fab from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import FileInput from "../Components/FileInput"

// import DropDown from '../Components/DropDown'
var moment = require('moment');


const styles = {
    heading: {
        color: "white",
        fontFamily: "Anton, sans-serif",
        textAlign: "center",
        padding: "50px",
        letterSpacing: "2px"
    },
    subheading: {
        color: "black",
        fontFamily: 'Raleway',

        textAlign: "center",
        // padding: "50px",
        letterSpacing: "2px"
    },

    headingDiv: {
        background: "#769A75"
    },

    button: {
        background: "#0C3F31",
        color: "white",
        opacity: "50%",
        // fontFamily: 'Lora, nserif',
        letterSpacing: '1px',
    },
    centerStage: {
        textAlign: "center",
    }

}


class Event extends Component {
    constructor() {
        super()
        this.state = {
            eventName: '',
            eventLocation: '',
            eventPriceRange: '',
            eventDate: '',
            eventTime: '',
            eventDescription: '',
            eventCategory: '',
            eventImage: '',
            selectedDate: new Date(),

        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    };

    handleSubmit = event => {
        event.preventDefault()
        console.log("hitting search")
        var eventInfo = {
            eventName: this.state.eventName,
            eventLocation: this.state.eventLocation,
            eventDescription: this.state.eventDescription,
            eventImage: this.state.eventImage,
            eventDate: this.state.eventDate,
            eventTime: moment(this.state.eventDate).format("LTS"),
            eventCategory: this.state.eventCategory,
            eventPriceRange: this.state.eventPriceRange,

        }
        console.log(eventInfo)
        fetch("/api/events", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventInfo)
        }).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (data) {
            console.log(data)
        }).catch((err) => {
            console.log(err)
        });
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



    render() {

        return (
            <Container>
                {/* <div style={styles.headingDiv}> */}

                {/* <h1 style={styles.heading}>ZEFARUH</h1> */}
                <h2 style={styles.subheading}>Create your Event!</h2>
                {/* </div> */}


                <TextField
                    id="inputLine"
                    name="eventName"
                    value={this.state.eventName}
                    onChange={this.handleInputChange}
                    type="text"
                    fullWidth
                    margin="normal"
                    label="Event Name"
                    // variant="none"
                    style={{ margin: 8 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        disableUnderline: true
                    }}
                />

                <TextField
                    id="inputLine"
                    name="eventLocation"
                    value={this.state.eventLocation}
                    onChange={this.handleInputChange}
                    type="text"
                    fullWidth
                    margin="normal"
                    label="Event Address"
                    // variant="none"
                    style={{ margin: 8 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        disableUnderline: true
                    }}

                />

                <TextField
                    id="inputLine"
                    name="eventDescription"
                    value={this.state.eventDescription}
                    onChange={this.handleInputChange}
                    type="text"
                    fullWidth
                    margin="normal"
                    label="Description of Event"
                    // variant="none"
                    style={{ margin: 8 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        disableUnderline: true
                    }}

                />

                <TextField
                    id="inputLine"
                    name="eventCategory"
                    placeholder="Music, Outdoor, Arts"
                    value={this.state.eventCategory}
                    onChange={this.handleInputChange}
                    type="text"
                    fullWidth
                    margin="normal"
                    label="Category"
                    // variant="none"
                    style={{ margin: 8 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        disableUnderline: true
                    }}

                />

                <TextField
                    id="inputLine"
                    name="eventPriceRange"
                    placeholder="Free, $, $$, $$$"
                    value={this.state.eventPriceRange}
                    onChange={this.handleInputChange}
                    type="text"
                    fullWidth
                    margin="normal"
                    label="Price Range"
                    // variant="none"
                    style={{ margin: 8 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        disableUnderline: true
                    }}

                />
                {/* <TextField
                    id="inputLine"
                    name="eventImage"
                    value={this.state.eventImage}
                    onChange={this.handleInputChange}
                    type="text"
                    fullWidth
                    margin="normal"
                    label="Image"
                    // variant="none"
                    style={{ margin: 8 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        disableUnderline: true
                    }}

                /> */}
                <FileInput
                    onChange={this.handleInputChange}
                    value={this.state.eventImage}
                />



                {/* <div className="row center">
                    
                    <div className="col-m-6 col-s-12 center">
                        <DatePicker
                            value={this.state.eventDate}
                            selectedDate={this.state.selectedDate}
                            setSelectedDate={this.setSelectedDate}
                            onChange={this.handleInputChange}
                            fullWidth
                        />
                    </div>
                    <div className="col-m-6 col-s-12 center">

                    <TimePicker
                   selectedDate={this.state.selectedDate}
                   setSelectedDate={this.setSelectedDate} 
                          
                            />
                    </div> */}


                {/* </div> */}




                <div className="row">
                    <div className="col m6">


                        <DatePicker
                            id="inputLine"
                            selectedDate={this.state.selectedDate}
                            setSelectedDate={this.setSelectedDate}

                        />
                    </div>

                    <div className="col m6">
                        <TimePicker
                            id="inputLine"
                            selectedDate={this.state.selectedDate}
                            setSelectedDate={this.setSelectedDate} />


                    </div>
                </div>

                <div className="row">
                    <div className="col m6" style={styles.centerStage}>
                        <Fab onClick={(event) => this.handleSubmit(event)}
                            // variant="extended"
                            // size="medium"
                            // color="primary"
                            aria-label="submit"
                        >
                            <Send />
                            Submit
                    </Fab>
                    </div>
                </div>
            </Container>

        )
    }

}

export default Event