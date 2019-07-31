import React from "react"
// import { Navbar, NavItem, } from 'react-materialize'
import { Link } from "react-router-dom"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import { red } from "@material-ui/core/colors";


const sections = [
    'Technology',
    'Design',
    'Culture',
    'Business',
    'Politics',
    'Opinion',
    'Science',
    'Health',
    'Style',
    
  ];

  const useStyles = makeStyles(theme => ({
    toolbar: {
      borderBottom: `1px solid `,
      padding: `20px`
     
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      direction:'row',
    
      alignItems:'center',
      justifyContent: 'space-evenly',
      overflowX: 'auto',
      boxShaddoe: 'none'
      
    },
    toolbarLink: {
      padding: theme.spacing(10),
      flexShrink: 0,
    
      
    },
   
   
  }));
function Nav() {
    const classes = useStyles();

    return (

        // <Navbar brand={<a />} alignLinks="right" className="blue " sidenav={<li />}>


        //     <Link
        //         to="/myaccount"
        //         className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
        //     >
        //         <NavItem href="">
        //             My Account
        //     </NavItem>

        //     </Link>
        //     <NavItem href="components.html">
        //         Saved Events
        // </NavItem>
        // </Navbar>
        <React.Fragment>
               <CssBaseline/>
        <Toolbar className={classes.toolbar}>
        <Button size="small">Sign up</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
         Zefaruh
        </Typography>
        {/* <IconButton>
          <HomeIcon />
        </IconButton> */}
        <Button variant="outlined" size="small">
          Account Login
        </Button>
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