
  const axios = require("axios")
  const path = require('path');
  const envPath = path.join(__dirname, '..', '.env');
  //const moment = require('moment')
  console.log(envPath);
  
  require("dotenv").config({path:envPath})
  
  const transformData = require('./transform');


//var defaultTime = moment(Date.now()).format('YYYY[-]MM[-]DDTHH:mm:ss'); 
token = process.env.REACT_APP_API_KEY

function searchEventBrite() {
      const eventBriteUrl = `https://www.eventbriteapi.com/v3/events/search/?token=${token}`;

       axios.get(eventBriteUrl)
      .then(function (response) {
            console.log(response)        
            return events
     })  
           .then(transformData)
           .catch((err) =>{
           console.log(err)   
           })

        // 
         
          // .then(transformData)
          
    // .then(function (response) {
    //   console.log(events);
    //})
       //  .then(function (response) {
    //   var events = response.data._embedded.events
    //   console.log(events);
    // }) 
}
//console.log(searchEventBrite())
//console.log("transforming" + transformData)
module.exports = searchEventBrite
 
