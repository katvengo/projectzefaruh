import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [locationInput, setLocation] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  function handleChange(event) {
    var chosen = event.target.value
    console.log(chosen)    
    setLocation(chosen);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <form autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-controlled-open-select">Location</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={locationInput}
          onChange={handleChange}
          inputProps={{
            name: 'location',
            id: 'demo-controlled-open-select',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={200}>United States</MenuItem>
          <MenuItem value={249}>Chicago</MenuItem>
          <MenuItem value={324}>Los Angeles</MenuItem>
          <MenuItem value={381}>San Diego</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}
