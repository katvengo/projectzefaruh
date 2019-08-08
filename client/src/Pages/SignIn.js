import React from "react";
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import Container from "../Components/Container"


class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
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
        var userLoginInfo = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(userLoginInfo)
        if (!userLoginInfo.email || !userLoginInfo.password) {
            return;

        } else {
        fetch("/api/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userLoginInfo)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json()
        }).then(function(req, res) {
            this.props.history.push('/api/')
        }).catch((err) => {
            console.log(err)
        });
        }
            alert('Thank you for signing in!')
            this.props.history.push('/')
    }
    render() {
        return (
            <Container>
            <div className="center">
                <TextField
                    id="inputLine"
                    name="email"
                    value={this.state.email}
                    placeholder="hi@letsgetweird.com"
                    type="text"
                    fullWidth
                    margin="normal"
                    label="Email"
                    
                    style={{ margin: 5 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        disableUnderline: true
                    }}
                    onChange={this.handleInputChange}

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

                <Fab onClick={(event) => this.handleSubmit(event)}
                    variant="extended"
                    size="medium"
                    color="primary"
                    aria-label="submit"
                    className="submitBtn"
                >
                    Log-In
                </Fab>

                {/* this submit button needs to save the user information to the database */}


            </div>

            </Container>



        )

    }

}
export default SignUp