import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
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



export default function SubmitButton(props) {
    // console.log(`props: ${props}`)
  const classes = useStyles();

  return (
    
      <div>
        
        <Fab variant="extended" aria-label="Submit" className={classes.margin} {...props}>
          <Button {...props} />
          Submit
        </Fab>
      </div>
      
   
  );
}

