import React from "react";
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';


class SignUp extends React.Component {
    state = {

        firstName: '',
        lastName: '',
        email: '',
        password: '',
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    };

    render() {



        return (
            <div className="center">
            
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

                <Fab
                    variant="extended"
                    size="medium"
                    color="primary"
                    aria-label="submit"
                    // className={classes.margin}
                >
                    <Send />
                 Sign In
                </Fab>

                    {/* this submit button needs to save the user information to the database */}


            </div>





        )

    }

}
export default SignUp