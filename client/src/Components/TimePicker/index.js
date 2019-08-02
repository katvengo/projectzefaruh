import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardTimePicker,} from '@material-ui/pickers';

const useStyles = makeStyles({
  grid: {
    width: '100%',
  },
});

const TimePicker = ({ selectedDate, setSelectedDate }) => {
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container className={classes.grid} justify="space-around">
       
        
        <KeyboardTimePicker
          margin="normal"
          id="mui-pickers-time"
          label="Time"
          value={selectedDate}
          onChange={date => setSelectedDate(date)}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
          InputProps={{
            disableUnderline: true
          }}
        />


      </Grid>
    </MuiPickersUtilsProvider>
  );
}

export default TimePicker