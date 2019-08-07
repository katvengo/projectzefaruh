
  const axios = require("axios")
  const path = require('path');
  const envPath = path.join(__dirname, '..', '.env');
  const moment = require('moment')
  const searchTicketMaster = require("./services/ticketmasterDataService")
  //const searchThruDatabase = require("./services/database")
  console.log(envPath);
  
  require("dotenv").config({path:envPath})
  
   token = process.env.REACT_APP_API_KEY
   token2 = process.env.REACT_APP_API_KEY_SECOND
  console.log(token, token2)
  var defaultTime = moment(Date.now()).format(); 
  //var defaultDay = moment(Date.now()).format('YYYY[-]MM[-]').toString(); 
  // geohash = "gbsuv", city = "San Diego",
  //location = geoHash, date = defaultDay,
  async function search( query = 'concerts', time = defaultTime){
    // const ticketmasterUrl = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${query}&countryCode=US&localStartDateTime=${time}&apikey=h0unNltRv7LnmEOS2kYZ43GR9GKBQjCC`;

    //console.log(ticketmasterUrl);
    return axios.all([
        searchTicketMaster(query, time),
        //searchThruDatabase(query, location, date, time)
         //axios.get(`https://www.eventbriteapi.com/v3/events/search/?token=${token}`),
      // axios.get(`https://api.trade.gov/v1/trade_events/search?api_key=${token2}&q=${query}&start_date=${start}&end_date=${end}`)
    ])
    //, eventBrite, tradeGov
    .then(axios.spread((ticketMaster) => {
       console.log({ticketMaster})
      //eventBrite = eventBrite.data.response;
      
      // tradeGov = tradeGov.response;      
      return({
      title: 'events',
      ticketMaster: ticketMaster,
      // dataBase: dataBase
      //  eventBrite,
      //   tradeGov
      })
    }))
    
    .catch((err) => {
      console.log(err)
    })
  }

  console.log(search())
   
 module.exports = search

  // // Format needed for start and end dates {YYYY-mm-dd TO YYYY-mm-dd}
  //   // Promise.all([ticketMaster, eventBrite]).then(function(values) {
  //   //   return values;
  //   // });
  // // &stateCode=${state}
  // getEvent: function(id) {
  //   return axios.get("/api/events/" + id);
  // },
  // deleteEvent: function(id) {
  //   return axios.delete("/api/events/" + id);
  // },
  // // Saves a events to the database
  // saveEvent: function(eventData) {
  //   return axios.post("/api/events", eventData);
  // },
  
  // getSavedEvent: function(){
  //   return axios.get("/api/events")
  // }








