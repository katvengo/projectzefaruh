
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import { lime } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
var moment = require('moment');


// const useStyles = makeStyles(theme => ({
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: lime[600],
//   },
// }));

const Styles = {
  place: {
    fontSize: "20px",
    margin: "0px"
    // color: "red"
  },
  margins: {
    margin: "0px"
  },
  cardImage: {
    height: "100%",
    width: "100%",
    margin: "10px"
  },
  cardBodyMargins: {
    margin: "15px 10px 0px",
    border: " 1px solid red"
  },
  heartBtn:{
    margin: '0px, 50px, 0px, 0px', 
    padding: "0px, 50px, 0px 0px"
  },
  heart:{
    margin: "0px, 20px, 0px, 0px"
  }
}



const ResultCard = ({ expanded, handleExpandClick, locationName, title, dates, image, note,
  tickets, locationAddress, locationCity, locationPostalCode, locationState, locationDistance, locationDistanceUnits }) => {
    // const classes = useStyles();
    const eventDate= {dates}



  return (


    <div>
      {/* <h3>Results for {title}</h3> */}
      <div className="card mb-3">
        <div className="row ">

          <div className="col-md-5 ">
            <img src={image} className="card-img" alt="..." style={Styles.cardImage} />
          </div>

          <div className="col-md-6">
            <div className="card-body" style={Styles.cardBodyMargins}>
              <div className="bodyContainer">
                <div className="row " style={Styles.margins}>

                  {/* <div className="col m10"> */}
                  <h4 className="card-title" >{title}</h4>
                  {/* </div> */}



                </div>


                {/* <h5 className="card-subheading"> .toUTCString({dates}){moment({dates}).format('ll')}</h5> */}
                <h5 className="card-subheading" style={Styles.place}> {console.log(eventDate)}</h5>
                <h5 className="card-subheading" style={Styles.place}> {locationName}</h5>
                <h6 className="card-subheading"> {locationCity}, {locationState}</h6>

                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                {/* <div className="card-action">
                <a href={tickets} target="_blank" rel="noopener noreferrer" >Purchase Tickets</a>
              </div> */}

                <a href={tickets} className="card-link">Tickets</a>
                <a href="#" className="card-link">Another link</a>

                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>

          </div>
          <div className="col-md-1" style={Styles.cardBodyMargins} >
            <div className="row"> 
            <IconButton aria-label="add to favorites"  >
              <FavoriteIcon  id=" " style={Styles.heart}/>
            </IconButton>
            </div>

          </div>
        </div>
      </div>
    </div>


    //----------------------------------------------------2nd card layout---------------------------
    /* <Card className={classes.card}>
    <CardHeader
      // avatar={
      //   <Avatar aria-label="recipe" className={classes.avatar}>
      //     R
      //   </Avatar>
      // }
      action={
        <FavoriteIcon/>
      }
      title={title}
      subheader={locationName} 
      
    />
    <CardMedia
      className={classes.media}
      image={image}
      // title={title}
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        {dates}
      
      </Typography>
    </CardContent>
    <CardActions >
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>Method:</Typography>
        <Typography paragraph>
         {note}
        </Typography>
        {/* <Typography paragraph>
          Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
          heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
          browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
          and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
          pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
          saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
        </Typography>
         
        <Typography>
          Set aside off of the heat to let rest for 10 minutes, and then serve.
        </Typography>
      </CardContent>
    </Collapse>
    </Card> */

    //---------------------------------------------------------------------------------------------



  )

}
export default ResultCard


