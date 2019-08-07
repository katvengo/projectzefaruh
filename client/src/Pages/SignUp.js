import React from "react";
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import Container from "../Components/Container"
import FileInput from "../Components/FileInput"


class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            image: '',
            interests: '',
            msg: ''
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
        console.log("submit is being hit")
        var userInfo = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        console.log(userInfo)
        fetch("/api/signup", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInfo)
        }).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        // }).then(function (data) {
        //     console.log(data)
        }).then(function() {
            window.location.replace("/api/event");
        }).catch((err) => {
            console.log(err)
        });
    }
    render() {
        return (
            <Container>
                <div className="center">
                    <TextField
                        id="inputLine"
                        name="username"
                        value={this.state.username}
                        placeholder="username"
                        onChange={this.handleInputChange}
                        type="text"
                        fullWidth
                        margin="normal"
                        label="username"
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
                        name="email"
                        value={this.state.email}
                        placeholder="Email"
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
                        id="inputLine"
                        name="password"
                        value={this.state.password}
                        placeholder="Password"
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
                    {/* <TextField
                    name="image"
                    value={this.state.image}
                    placeholder="url"
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

                    <TextField
                        id="inputLine"
                        name="interests"
                        value={this.state.interests}
                        placeholder="Sports, Arts/Entertainment, Hiking, Music"
                        onChange={this.handleInputChange}
                        type="text"
                        fullWidth
                        margin="normal"
                        label="Interests"
                        // variant="none"
                        style={{ margin: 8 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            disableUnderline: true
                        }}

                    />
                    <FileInput />

                    <Fab onClick={(event) => this.handleSubmit(event)}
                        variant="extended"
                        size="medium"
                        color="primary"
                        aria-label="submit"
                    >
                        <Send />
                        Submit
                    </Fab>

                    {/* this submit button needs to save the user information to the database */}


                </div>



            </Container>

        )

    }

}
export default SignUp