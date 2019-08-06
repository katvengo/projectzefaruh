import React, { Component } from "react"
import Container from '../Components/Container'
import TextField from '@material-ui/core/TextField';
import DatePicker from '../Components/DatePicker'
import CategoryInput from "../Components/CategoryInput"
// import axios from 'axios';
import TimePicker from "../Components/TimePicker";
//var moment = require('moment');
import Fab from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import DropDown from '../Components/DropDown'
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
        fontFamily: "Anton, sans-serif",
        textAlign: "center",
        padding: "50px",
        letterSpacing: "2px"
    },

    headingDiv: {
        background: "#F2D8C9"
    },

    button: {
        background: "#BF8874",
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


    setSelectedDate = date => {
        this.setState({ eventDate: date })
    }

    setPriceRange = () => {
        this.setState({ eventPriceRange: "howdy" })
    }


    render() {

        return (
            <Container>
             <h2 style={styles.subheading}>Create your Event!</h2>

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
                    style={{ margin: 0 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        disableUnderline: true
                    }}
                />

                <TextField
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

                />


                <form action="#">
                    <div className="file-field input-field">
                        <div className="btn">
                            <span>File</span>
                            <input type="file" multiple />
                        </div>
                        <div className="file-path-wrapper">
                            <input
                                className="file-path validate"
                                type="text"
                                placeholder="Upload one or more files"
                            />
                        </div>
                    </div>
                </form>



                <div className="row">
                    <div className="col m4">
                        {/* <CategoryInput
                            value={this.state.eventCategory}
                            onChange={this.setCategory}
                            setCat={this.setCategory}
                        /> */}

                        <TextField
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

                    </div>
                    <div className="col m4">
                        <DatePicker
                            value={this.state.eventDate}
                            selectedDate={this.state.selectedDate}
                            setSelectedDate={this.setSelectedDate}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="col m4">
                        <TimePicker
                            value={this.state.eventDate}
                            selectedDate={this.state.selectedDate}
                            setSelectedDate={this.setSelectedDate}
                            onChange={this.handleInputChange}

                        />
                    </div>
                    <div className="col m4">
                        {/* <DropDown
                      
                            // value={this.state.eventPriceRange}
                            // onChange={this.handleInputChange}
                            
                        /> */}

                        <TextField
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