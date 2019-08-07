//const transformData = require('./ticketmasterToZafaraTransformation');
const axios = require('axios');
const moment = require('moment')


var defaultTime = moment(Date.now()).format('YYYY[-]MM[-]DDTHH:mm:ss').toString(); 
console.log('***************** Default time:', defaultTime)
function searchTicketmaster(query, time = defaultTime) {
  const ticketmasterUrl = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${query}&countryCode=US&localStartDateTime=${time}&apikey=h0unNltRv7LnmEOS2kYZ43GR9GKBQjCC`;

  console.log('****************** TicketMaster URL: ', ticketmasterUrl);
       return axios.get(ticketmasterUrl)
           //.then(transformData)
           .catch((err) =>{
           console.log(err)   
           })
             
}

module.exports = searchTicketmaster
 
