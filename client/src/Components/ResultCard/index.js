
import React from 'react';

import IconButton from '@material-ui/core/IconButton';

import FavoriteIcon from '@material-ui/icons/Favorite';
// import { textAlign } from '@material-ui/system';

var moment = require('moment');



const Styles = {
  place: {
    fontSize: "24px",
    margin: "0px",
    marginBottom: "0px",
    fontWeight: "700",
    color: "#156172",

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
    margin: "10px 0px 15px",
    border: " 1px solid white",

  },

  imgDiv: {
    margin: "20px"
  },
  linkRow: {
    marginTop: '20px'
  },
  paragraph: {
    // border: " 1px solid red",
    marginTop: "20px",
    fontSize: "20px",
    fontWeight: "500"


  },

  cardTitle: {
    marginTop: "10px",
    marginBottom: "5px",
    textALign: "center",
    marginLeft: "px",
    fontSize: "28px",
    fontWeight: "700",
    color: "black",
  },
  Date: {
    fontWeight: "300",
    // color: "#156172",
    marginTop: "10px",
    textALign: "center",
    marginLeft: "20px",
    fontSize: "20px",
  },
  heartSpan: {
    textAlign: 'right',
    marginTop: "30px",
    marginRight: "30px"
  }

}



const ResultCard = ({  title, dates, time, image,  locationVenue, 
  tickets, description, locationAddress, locationCity, locationPostalCode, locationState,  }) => {
  // const classes = useStyles();




  return (




    <div>
      {/* <h3>Results for {title}</h3>  */}
      {/* ---------------------------HEART SPAN---------------------------------- */}
      <div className="card mb-3 cardDiv">
        <span style={Styles.heartSpan}>
          <IconButton aria-label="add to favorites" className="heartBtn">
            <FavoriteIcon id="faveBtn" style={Styles.heart} />
          </IconButton>
        </span>

        {/* ---------------------------TITLE---------------------------------- */}
        <div className="row">
          <h5 className="center" style={Styles.cardTitle}>{title}</h5>
        </div>
        {/* -----------------------------------------CARD INFO----------------------------------------------- */}

        <div className="row center flow-text" >

          {/* ---------------------------IMAGE----------------------------------- */}
          <div className="col-md-4 valign-wrapper center">
            <img src={image} className="card-img right-align responsive-img " alt="..." style={Styles.cardImage} />
          </div>


          {/* ------------------------TEXT ------------------------------------- */}

          <div className="row ">
            <div className="col-md-12">
              <div className="card-body valign-wrapper center" style={Styles.cardBodyMargins}>
                <div className="bodyContainer center" >


                  <p className="flow-text" style={Styles.paragraph}>
                    <span style={Styles.place}>{locationVenue} </span> <br />
                    Date: {moment(dates).format("MMM Do YY")} <br />
                    Time: {time} <br />

                    {locationAddress}<br></br>
                    {locationCity}, {locationState}, {locationPostalCode}
                  </p>
                  {/* <p>{description}</p> */}



                  {/* ---------------------------LINKS---------------------------------- */}

                  <div className="row" style={Styles.linkRow}>
                    <div className="col m12">
                      <a href={tickets} target="_blank" rrel="noopener noreferrer" className="card-link tktBtn flow-text">Purchase Tickets</a>
                    </div>
                  </div>


                </div>

              </div>

            </div>
          </div>

        </div>



      </div>
    </div>




  )

}
export default ResultCard


