import React, { Component } from "react"



const styles = {
    heading: {
        color: "white",
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
        // fontFamily: 'Lora, serif',
        letterSpacing: '1px',

    }

}




class Home extends Component {
    constructor() {
        super()
        this.state = {
            eventName: "",
            eventLocation,
            eventSearched: "",
            eventLocationSearched: "",
            selectedDate: new Date(),
            geohash: 0,
            expanded: false

        }
    }
   

    // searchThruDatabase = (query, time) => {
    //     const request = {query, time}
    //     axios.post('/api/authorize', request)   
    //         //.then(res => res.json())
    //         .then((events) => {
    //             console.log({events})
    //             //console.log(ticketMaster)
    //             this.setState({
    //                 events: events.data
    //             })
    //         })
    //         // fetch("/authorize", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(request)})
    // }
    
 

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    };
  
    //moment(this.state.selectedDate).format('YYYY[-]MM[-]DDTHH:mm:ss')
    handleSubmit = event => {
        event.preventDefault()
        console.log("hitting search")
        this.searchThruDatabase(this.state.eventSearched, moment(this.state.selectedDate).format('YYYY[-]MM[-]DDTHH:mm:ss'))
        console.log("event searched state ", this.state.eventSearched, "event date: ", moment(this.state.selectedDate).format('YYYY MM DDTHH:mm:ss'))
    }

    render() {
        return (

            <Container>
                <TextField
                    id="inputLine"
                    name="eventSearched"
                    value={this.state.eventSearched}
                    placeholder="  i.e. outdoor concerts, roll-outs"
                    onChange={this.handleInputChange}
                    type="text"
                    fullWidth

                    margin="normal"
                    label="Event or Activity"
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
                    name="email"
                    value={this.state.email}
                    placeholder=" Email"
                    onChange={this.handleInputChange}
                    type="text"
                    fullWidth
                    margin="normal"
                    label="Email"
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
                    name="password"
                    value={this.state.password}
                    placeholder=" Password"
                    onChange={this.handleInputChange}
                    type="text"
                    fullWidth
                    margin="normal"
                    label="Password"
                    // variant="none"
                    style={{ margin: 8 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        disableUnderline: true
                    }}
                />


            


               
                    <SearchButton
                        onClick={(event) => this.handleSubmit(event)} style={styles.button} className="center"/>

            </Container>

        )
    }

}

export default Event