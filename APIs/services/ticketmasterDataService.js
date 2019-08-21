//const transformData = require('./ticketmasterToZafaraTransformation');
const axios = require('axios');
const moment = require('moment')
const transformData = require('./ticketmasterToZafaraTransformation');


var defaultTime = moment(Date.now()).format('YYYY[-]MM[-]DDTHH:mm:ss').toString(); 
//console.log('***************** Default time:', defaultTime)
function searchTicketmaster(cityCode = '200', query, time = defaultTime) {
  const ticketmasterUrl = `https://app.ticketmaster.com/discovery/v2/events.json?&dmaId=${cityCode}&keyword=${query}&countryCode=US&localStartDateTime=${time}&apikey=h0unNltRv7LnmEOS2kYZ43GR9GKBQjCC`;
console.log(ticketmasterUrl)
  //console.log('****************** TicketMaster URL: ', ticketmasterUrl);
       return axios.get(ticketmasterUrl)
           .then(function (apiEvents) {
            //console.log(apiEvents)
            //var locationData = apiEvents.Agent._events
            //console.log(locationData)
            //var more = apiEvents.data
            //console.log(more)
            var apiEventResults = apiEvents.data._embedded.events
            console.log(apiEventResults)
            var results = apiEventResults.map(transformData)
            //console.log(apiEventsParsed)
           //var sendData = apiEventsParsed
           //console.log(results)
           //console.log("data sent from ticketMasterDataService------------")
           //console.log(sendData)
            
             //return apiEvents
            return results;
          })
           .catch((err) =>{
           console.log(err)   
           })
          
}
//console.log(searchTicketmaster(200, 'concerts', defaultTime))
module.exports = searchTicketmaster
 
