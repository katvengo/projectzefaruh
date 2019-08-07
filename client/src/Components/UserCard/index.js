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
    backgroundColor: "#4a8148",
    color: "#d9d9d9"
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
  const username = {username}

  return (
    <Card className={classes.card}>
      {/* <CardMedia
        component="img"
        alt="default user image"
        height="140"
        image="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-squares-01/3/31-512.png"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h6" component="h6">
          name 
          {props.name}
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
