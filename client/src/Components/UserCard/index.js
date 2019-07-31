import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles(theme => ({
  card: {},
  avatar: {}
}));

function UserCard({ name, location, image }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Avatar
          alt="user avatar"
          src="https://png.pngtree.com/svg/20161027/631929649c.svg"
        />
        <h6>user card</h6>
        <Typography component="p">
          {name} - {location}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="edit">
          <SettingsIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
export default UserCard;
