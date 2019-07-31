
import axios from "axios";

// Export an object with a "search" method that searches the API for the passed query
export default {
  search: function(query, geohash, city, time) {
    return axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${query}&geoPoint=${geohash}&city=${city}&countryCode=US&localStartDateTime=${time}&apikey=h0unNltRv7LnmEOS2kYZ43GR9GKBQjCC
  
    `);
  }, 
  // &stateCode=${state}
  getEvent: function(id) {
    return axios.get("/api/events/" + id);
  },
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  // Saves a events to the database
  saveEvent: function(eventData) {
    return axios.post("/api/events", eventData);
  },
  
  getSavedEvent: function(){
    return axios.get("/api/events")
  }
};