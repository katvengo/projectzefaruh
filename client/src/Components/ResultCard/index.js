
import React from 'react';

import IconButton from '@material-ui/core/IconButton';

import FavoriteIcon from '@material-ui/icons/Favorite';
import { fontWeight } from '@material-ui/system';
// import { textAlign } from '@material-ui/system';

// var moment = require('moment');



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
    margin: "30px 10px 15px",
    // border: " 1px solid red"
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
  }

}



const ResultCard = ({ locationName, title, dates, image, note,
  tickets, locationAddress, locationCity, locationPostalCode, locationState, locationDistance, locationDistanceUnits }) => {
  // const classes = useStyles();
 



  return (




    <div>
      {/* <h3>Results for {title}</h3> */}
      <div className="card mb-3 cardDiv">
        <div className="row center " >


          <div className="col-md-5 valign-wrapper center">
            <img src={image} className="card-img center" alt="..." style={Styles.cardImage} />
          </div>

          <div className="col-md-7">
            <div className="card-body valign-wrapper" style={Styles.cardBodyMargins}>
              <div className="bodyContainer">
                <div className="row " style={Styles.margins}>

                  <div className="" >
                    <h4 style={Styles.place} className="card-title flow-text" >{title.trim()}</h4>
                  </div>



                </div>


                <p className="flow-text"  style={Styles.paragraph}>

                  {dates} <br />
                  {locationName}
                  <br />
                  {locationCity}, {locationState}
                  </p>


                {/* <p className="card-text flow-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                {/* <div className="card-action">
                <a href={tickets} target="_blank" rel="noopener noreferrer" >Purchase Tickets</a>
              </div> */}


                {/* <a href="/" className="card-link">Another link</a> */}



                <div className="row " style={Styles.linkRow}>
                  <div className="col m6">
                    <a href={tickets} target="_blank" className="card-link tktBtn flow-text">Tickets</a>
                  </div>
                  <div className="col m6">
                    <IconButton aria-label="add to favorites" className="heartBtn"  >
                      <FavoriteIcon id="faveBtn" style={Styles.heart} />
                    </IconButton>
                  </div>
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


