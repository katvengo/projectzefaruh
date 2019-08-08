import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import { green, grey } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  card: {
    textAlign: "center",
    backgroundColor: "#79D8AC",
    color: "#d9d9d9"
  },
  nameTitle:{
    color: '#156172',
    fontSize: '20px',
    fontWeight: '400'
  }
  // avatar: {
  //   width: 100,
  //   height: 100
  // },
  // SettingsIcon: {
  //   color: "#d9d9d9",
  // }
}));

function UserCard(props) {
  const classes = useStyles();
   

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        alt="user profile"
        height="200"
        image={props.image}
         />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h6" className={classes.nameTitle}>
         {props.username}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <IconButton aria-label="edit">
          <SettingsIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
}
export default UserCard;
