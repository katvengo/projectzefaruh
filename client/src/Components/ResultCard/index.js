
import React from 'react';

import IconButton from '@material-ui/core/IconButton';

import FavoriteIcon from '@material-ui/icons/Favorite';
import { fontWeight } from '@material-ui/system';
// import { textAlign } from '@material-ui/system';

var moment = require('moment');



const Styles = {
  place: {
    fontSize: "24px",
    margin: "0px",
    marginBottom: "0px",
    fontWeight: "700",
    color: "#013F2E",

  },
  margins: {
    margin: "0px",
    marginBottom: "5px",
    // border: " 1px solid red",
    textAlign: "center",

  },
  cardImage: {
    marginTop: "20px",

  },
  cardBodyMargins: {
    margin: "30px 0px 15px",
    border: " 1px solid white",

  },

  imgDiv: {
    margin: "20px"
  },
  linkRow: {
    marginTop: '20px'
  },
  paragraph: {
    //  border: " 1px solid red"
    marginTop: "20px",
    fontSize: "18px"
  },
  cardTitle: {
    marginTop: "10px",
    textALign: "center",
    marginLeft: "20px",
    fontSize: "24px",
    fontWeight: "700",
    color: "#013F2E",
  },
  Date: {
    fontWeight: "300",
    color: "#013F2E",
    marginTop: "10px",
    textALign: "center",
    marginLeft: "20px",
    fontSize: "24px",
  },
  heartSpan: {
    textAlign: 'right',
    marginTop: "20px",
    marginRight: "20px"
  }

}



const ResultCard = ({ locationName, title, dates, time, image, secondImage, locationVenue, note,
  tickets, description, locationAddress, locationCity, locationPostalCode, locationState, locationDistance, locationDistanceUnits }) => {
  // const classes = useStyles();
 



  return (




    <div>
      {/* <h3>Results for {title}</h3>  */}
      <div className="card mb-3 cardDiv">
        <span style={Styles.heartSpan}>
               <IconButton aria-label="add to favorites" className="heartBtn">
                      <FavoriteIcon id="faveBtn" style={Styles.heart} />
                    </IconButton>
    </span>
        <h5 style={Styles.cardTitle}>{title.trim(' ')}</h5>
        <h6 style={Styles.Date}>{moment(dates).format("MMM Do YY")} @ {time} located at {locationVenue}</h6>
        <div className="row center " >
          <div className="col-md-4 valign-wrapper center">
            <img src={image} className="card-img center" alt="..." style={Styles.cardImage} />
          </div>

          <div className="col-md-7">
            <div className="card-body valign-wrapper center" style={Styles.cardBodyMargins}>
              <div className="bodyContainer center ">
                <div className="row " style={Styles.margins}>

                  <div className="" >
                    {/* <h4 style={Styles.place} className="center flow-text" >{title.trim(' ')}</h4> */}
                  </div>
                </div>

                <p className="flow-text"  style={Styles.paragraph}>
{/* 
                  {moment(dates).format("MMM Do YY")} <br />
                  {locationName} */}
                  <br />
                  Address: {locationAddress}<br></br> {locationCity}, {locationState}
                  </p>
                  <p>{description}</p>


                {/* <p className="card-text flow-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                {/* <div className="card-action">
                <a href={tickets} target="_blank" rel="noopener noreferrer" >Purchase Tickets</a>
              </div> */}


                {/* <a href="/" className="card-link">Another link</a> */}



                <div className="row" style={Styles.linkRow}>
                  <div className="col m12">
                    <a href={tickets} target="_blank" rel="tickets" className="card-link tktBtn flow-text">Purchase Tickets</a>
                  </div>
                  {/* <div className="col m6">
                    {/* <IconButton aria-label="add to favorites" className="heartBtn"  >
                      <FavoriteIcon id="faveBtn" style={Styles.heart} />
                    </IconButton> 
                  </div> */}
                </div>
              </div>
            </div>

          </div>
          {/* <div className="col-md-1" style={Styles.cardBodyMargins} >
           

          </div> */}
        </div>
      </div>
    </div>




  )

}
export default ResultCard


