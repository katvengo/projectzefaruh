// import axios from "axios";
// var dotenv = require('dotenv');
// dotenv.config();
// //  token = process.env.REACT_APP_APIKEY
// //  token2 = process.env.REACT_APP_APIKEY2
// ​
// // Export an object with a "search" method that searches the API for the passed query
// export default {
//  search: function(query, geohash, city, time) {
//     return axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${query}&geoPoint=${geohash}&city=${city}&countryCode=US&localStartDateTime=${time}&apikey=h0unNltRv7LnmEOS2kYZ43GR9GKBQjCC`)
//     // var eventBrite = axios.get(`https://www.eventbriteapi.com/v3/categories/?token=IM2RWZMHUGYL7CNUWLGA`)
 
//     // Promise.all([ticketMaster, eventBrite]).then(function(values) {
//     //   return values;
//     // });
 
//   }, 
//   // searchEventBrite: function(){
//   //   return axios.get(`https://www.eventbriteapi.com/v3/events/search/?token=${token}`)
//   // },
// ​
//   // searchTradeGov: function(query, start, end){
//   //   return axios.get(`https://api.trade.gov/v1/trade_events/search?api_key=${token2}&q=${query}&start_date=${start}&end_date=${end}`)
//   // },
//   // Format needed for start and end dates {YYYY-mm-dd TO YYYY-mm-dd}
//     // Promise.all([ticketMaster, eventBrite]).then(function(values) {
//     //   return values;
//     // });
//   // &stateCode=${state}
// //   getEvent: function(id) {
// //     return axios.get("/api/events/" + id);
// //   },
// //   deleteEvent: function(id) {
// //     return axios.delete("/api/events/" + id);
// //   },
// //   // Saves a events to the database
// //   saveEvent: function(eventData) {
// //     return axios.post("/api/events", eventData);
// //   },
  
// //   getSavedEvent: function(){
// //     return axios.get("/api/events")
// //   }

// // };
// // ​







// //  token = process.env.REACT_APP_APIKEY
// //  token2 = process.env.REACT_APP_APIKEY2
// // console.log(token, token2)
// // function search(query, geohash, city, time, start, end){
// //   return  Promise.all([
// //     axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${query}&geoPoint=${geohash}&city=${city}&countryCode=US&localStartDateTime=${time}&apikey=h0unNltRv7LnmEOS2kYZ43GR9GKBQjCC`),
// //     axios.get(`https://www.eventbriteapi.com/v3/events/search/?token=${token}`),
// //     axios.get(`https://api.trade.gov/v1/trade_events/search?api_key=${token2}&q=${query}&start_date=${start}&end_date=${end}`)
// //   ])
// // }
 

 
 
// //   }, 
// //   // searchEventBrite: function(){
// //   //   return axios.get(`https://www.eventbriteapi.com/v3/events/search/?token=${token}`)
// //   // },

// //   // searchTradeGov: function(query, start, end){
// //   //   return axios.get(`https://api.trade.gov/v1/trade_events/search?api_key=${token2}&q=${query}&start_date=${start}&end_date=${end}`)
// //   // },
// //   // Format needed for start and end dates {YYYY-mm-dd TO YYYY-mm-dd}
// //     // Promise.all([ticketMaster, eventBrite]).then(function(values) {
// //     //   return values;
// //     // });
// //   // &stateCode=${state}
// //   getEvent: function(id) {
// //     return axios.get("/api/events/" + id);
// //   },
// //   deleteEvent: function(id) {
// //     return axios.delete("/api/events/" + id);
// //   },
// //   // Saves a events to the database
// //   saveEvent: function(eventData) {
// //     return axios.post("/api/events", eventData);
// //   },
  
// //   getSavedEvent: function(){
// //     return axios.get("/api/events")
// //   }
// }
