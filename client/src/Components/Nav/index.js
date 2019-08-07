import React from "react"
// import { Navbar, NavItem, } from 'react-materialize'
import { Link } from "react-router-dom"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Person from '@material-ui/icons/Person';
import AddPerson from '@material-ui/icons/PersonAdd';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


// import { red } from "@material-ui/core/colors";


const useStyles = makeStyles(theme => ({
  toolbar: {
    // borderBottom: `1px solid `,
    padding: `15px`,
    backgroundColor: "#769A75",
    height: "79px"
  },
  toolbarTitle: {
    flex: 1,
    fontFamily: 'Raleway',
    color: 'white',
    fontSize: "20px"
  },
  toolbarSecondary: {
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    overflowX: 'auto',
    boxShaddoe: 'none'

  },
 buttonDesign:{
  backgroundColor: '#F4FBF3',
  color: 'white',
  margin: "5px",
 },
  toolbarLink: {
    padding: theme.spacing(10),
    flexShrink: 0,
  },


}));
function Nav() {
  const classes = useStyles();

  return (

  
    <React.Fragment>
      <CssBaseline />
      <Toolbar className={classes.toolbar}>

      <Link to="/">
        <img src='https://i.ibb.co/qyh8GPg/Add-a-little-bit-of-body-text.png' alt = "giraffe" height="75" width="200"/>
</Link>
        {/* <Link to="/"> */}
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
          >
        </Typography>

          {/* </Link> */}


        {/* <Link to="/">
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Link> */}
        <Link to="/SignUp">
          {/* <Tooltip title="Signup"> */}
          <Fab size="small" focusable="false" className="hide-on-small-only">Sign up</Fab>
          <IconButton className="hide-on-med-and-up">
            <AddPerson/>
          </IconButton>
          {/* </Tooltip> */}
        </Link>

        <Link to="/SignIn">
          <Fab variant="outlined" size="small" className="hide-on-small-only" >
            Login
        </Fab>
        <IconButton className="hide-on-med-and-up">
            <Person/>
          </IconButton>
        </Link>


      </Toolbar>
      {/* <Toolbar component="nav" variant="dense" className='light-green darken-4' >
        {sections.map(section => (
          <Link
            to="/"
            color="inherit"
           nowrap
            key={section}
            variant="body2"
            href="#"
            className="{classes.toolbarLink}"
          >
            {section}
          </Link>
        ))}
      </Toolbar> */}

    </React.Fragment>

  )

}

export default Nav