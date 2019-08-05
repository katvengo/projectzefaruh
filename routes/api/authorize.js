const router = require("express").Router();
const search = require("../../APIs/API");

// const axios = require("axios")
// const path = require('path');
// const envPath = path.join(__dirname, '..', '.env');

// console.log(envPath);

// require("dotenv").config({path:envPath})

//  token = process.env.REACT_APP_API_KEY
//  token2 = process.env.REACT_APP_API_KEY_SECOND

// console.log(token, token2)

// search(query, geohash, city, time, start, end) 
// // axios.all(
// //   [
// //       axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${query}&geoPoint=${geohash}&city=${city}&countryCode=US&localStartDateTime=${time}&apikey=h0unNltRv7LnmEOS2kYZ43GR9GKBQjCC`),
// //       axios.get(`https://www.eventbriteapi.com/v3/events/search/?token=${token}`),
// //       axios.get(`https://api.trade.gov/v1/trade_events/search?api_key=${token2}&q=${query}&start_date=${start}&end_date=${end}`)
// //   ])
// //   .then(axios.spread(response => {
// //     console.log(response)
// //   }))





// function search(query, geohash, city, time, start, end){
//   return  Promise.all([
//     axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${query}&geoPoint=${geohash}&city=${city}&countryCode=US&localStartDateTime=${time}&apikey=h0unNltRv7LnmEOS2kYZ43GR9GKBQjCC`),
//     axios.get(`https://www.eventbriteapi.com/v3/events/search/?token=${token}`),
//     axios.get(`https://api.trade.gov/v1/trade_events/search?api_key=${token2}&q=${query}&start_date=${start}&end_date=${end}`)
//   ])

// }

router
  .post("/", async function (req, res) {

    try {
      // pick out the query and time values from request object
      const {
        body: {
          query,
          time
        }
      } = req;
      const apiEvents = await search(query, time);
      const dataBaseEvents = await 

      console.log('------------------------------------------');
      var events = apiEvents.ticketMaster.data._embedded.events
      //console.log({events})
      //console.log(apiEvents);
      return res.send(events);
      // creating a function to search our database
    } catch (err) {
      console.log('error catch block was triggered');
      console.error(err);
      res.sendStatus(500);
    }
  })


module.exports = router;