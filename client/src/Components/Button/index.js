import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import Fab from '@material-ui/core/Fab';


import Search from '@material-ui/icons/Search';
// import { green } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2),
    padding: theme.spacing(0,4)
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },


}
));



export default function SearchButton(props) {
    // console.log(`props: ${props}`)
  const classes = useStyles();

  return (
    
      <div>
        
        <Fab variant="extended" color="green" aria-label="Search" className={classes.margin} {...props}>
          <Search className={classes.extendedIcon} {...props} />
          Search
        </Fab>
      </div>
      
   
  );
}