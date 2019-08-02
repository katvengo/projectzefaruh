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
                    name="Name"
                    value={this.state.name}
                    placeholder=" name"
                    onChange={this.handleInputChange}
                    type="text"
                    fullWidth
                    margin="normal"
                    label="Name"
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
                    name="lastName"
                    value={this.state.lastName}
                    placeholder=" Last Name"
                    onChange={this.handleInputChange}
                    type="text"
                    fullWidth
                    margin="normal"
                    label="Last Name"
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
                    placeholder=" password"
                    onChange={this.handleInputChange}
                    type="text"
                    fullWidth
                    margin="normal"
                    label="password"
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
                    aria-label="asubmit"
                    // className={classes.margin}
                >
                    <Send />
                   Submit
                </Fab>

                    {/* this submit button needs to save the user information to the database */}


            </div>





        )

    }

}
export default SignUp