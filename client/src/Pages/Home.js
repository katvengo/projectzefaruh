import React, { Component } from "react"
import Container from '../Components/Container'
// import InputBox from '../Components/InputBox'
// import Nav from '../Components/Nav'
import TextField from '@material-ui/core/TextField';
import DatePicker from '../Components/DatePicker'
import CategoryInput from "../Components/CategoryInput"
import SearchButton from "../Components/Button"
import API from "../utils/API";
import ResultCard from "../Components/ResultCard"
import Geohash from 'latlon-geohash';
import TimePicker from "../Components/TimePicker";
var moment = require('moment');

//  var latlon;
//  var showPosition;
//  var showError





class Home extends Component {
    constructor() {
        super()
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
            expanded: false

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
    searchTicketMaster = (query, query2, query3, query4) => {
         console.log("geohash" + this.state.geohash)
         console.log("coords" + this.state.lat + this.state.lng)
        API.search(query, query2, query3, query4)
        .then(res => {
        var events = res.data._embedded.events
        console.log({ events });
        this.setState({ 
            events: res.data._embedded.events 
        })
    })
        .catch(err => console.log(err));
        };

    // eventBriteSearch = (query) => {
    //     console.log("geohash" + this.state.geohash)
    //     console.log("coords" + this.state.lat + this.state.lng)
    //     API.searchEventBrite(query)
    //         .then(res => {
    //             var events = res.data.events
    //             console.log({ events });
    //             this.setState({
    //                 events: res.data.events
    //             })
    //         })
    //         .catch(err => console.log(err));
    // };
    // searchEventsTradeGov = (query) => {
    //     API.searchTradeGov(query)
    //         .then(res => {
    //             var events = res.data.events
    //             console.log({ events });
    //             // this.setState({ 
    //             //     events: res.data.events
    //             // })
    //         })
    //         .catch(err => console.log(err));
    // };


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    };

    setSelectedDate = date => {
        this.setState({ selectedDate: date })
    }

    setExpanded = () => {
        if (this.state.expanded === false) {

            this.setState({ expanded: true });
            console.log("this needs to expand")
        }
        else {
            this.setState({ expanded: false })
        }
    }



    handleSubmit = event => {
        event.preventDefault()
        this.searchTicketMaster(this.state.eventSearched, this.state.geohash, this.state.eventLocationSearched, moment(this.state.selectedDate).format('YYYY[-]MM[-]DDTHH:mm:ss'))
        // this.eventBriteSearch(this.state.eventSearched)
        console.log("event searched state ", this.state.eventSearched, "event date: ", moment(this.state.selectedDate).format('YYYY MM DDTHH:mm:ss'))
    }

    render() {
        return (
          
                <Container>
                    <h1>Search Upcoming Events</h1>
                    <div className="row">
                        <div className="col m6">
                            <TextField
                                name="eventSearched"
                                value={this.state.eventSearched}
                                placeholder="  i.e. outdoor concerts, roll-outs"
                                onChange={this.handleInputChange}
                                type="text"
                                fullWidth

                                margin="normal"
                                label="Event or Activity"
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
                        <div className="col m6 s12">

                            <TextField
                                name="eventLocationSearched"
                                value={this.state.eventLocationSearched}
                                placeholder="San Diego, Los Angeles, Anaheim"
                                onChange={this.handleInputChange}
                                type="text"
                                fullWidth
                                label="City"
                                margin="normal"
                                // variant="outlined"
                                style={{ margin: 8 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    disableUnderline: true
                                }}

                            //  label="eventSearch"
                            />
                        </div>

                    </div>

                    <div className="row">
                    <div className="col m4 s12">
                        <DatePicker
                            selectedDate={this.state.selectedDate}
                            setSelectedDate={this.setSelectedDate}
                        // name="selectedDate"
                        />
                    </div>
                    <div className="col m4 s12">

                        <TimePicker
                            selectedDate={this.state.selectedDate}
                            setSelectedDate={this.setSelectedDate} />
                    </div>
                    <div className="col m4 s12">
                        <CategoryInput />

                    </div>
                    <SearchButton
                        onClick={(event) => this.handleSubmit(event)} />
                    </div>


                <div className="card-columns">



                    {/* {this.state.events.map(event => {
                        return (<ResultCard
                            title={event.name.text}
                            dates={event.start.local}
                            image={event.logo.url}
                            note={event.summary}
                            key={event.id}
                            tickets={event.url}

                        />
                        )
                    })} */}
                    {this.state.events.map(event => {
                        return (<ResultCard
                            expanded={this.state.expanded}
                            handleExpandClick={this.setExpanded}
                            handleUnExpandClick={this.setUnExpanded}
                            title={event.name}
                            dates={event.dates.start.localDate}
                            image={event.images[0].url}
                            note={event.pleaseNote}
                            key={event.id}
                            locationName={event._embedded.venues[0].name}
                            // tickets={event._embedded.attractions[0].url}
                            locationAddress={event._embedded.venues[0].address.line1}
                            locationCity={event._embedded.venues[0].city.name}
                            locationPostalCode={event._embedded.venues[0].postalCode}
                            locationState={event._embedded.venues[0].state.name}
                            locationDistance={event._embedded.venues[0].distance}
                            locationDistanceUnits={event._embedded.venues[0].units}
                        />


                        )
                    })}
                </div>


            </Container >

        )
    }

}

export default Home