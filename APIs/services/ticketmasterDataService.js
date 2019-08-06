const transformData = require('./ticketmasterToZafaraTransformation');
const axios = require('axios');
const moment = require('moment')


var defaultTime = moment(Date.now()).format('YYYY[-]MM[-]DDTHH:mm:ss').toString(); 
console.log(defaultTime)
function searchTicketmaster(query = "concerts", time = defaultTime) {
  const ticketmasterUrl = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${query}&countryCode=US&localStartDateTime=${time}&apikey=h0unNltRv7LnmEOS2kYZ43GR9GKBQjCC`;
       return axios.get(ticketmasterUrl)
           //.then(transformData)
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

//console.log("transforming" + transformData)
module.exports = searchTicketmaster
 
