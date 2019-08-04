import axios from "axios";
var dotenv = require('dotenv');
 dotenv.config();

// // Export an object with a "search" method that searches the API for the passed query
 export default {
 search: function() {
    return axios.get("/api/users")
    },
  getEvent: function(id) {
    return axios.get("/api/user/" + id);
  },
  deleteEvent: function(id) {
    return axios.delete("/api/user/" + id);
  },
   // Saves a user to the database
  createUser: function(userData) {
    return axios.post("/api/signup", userData);
  },
  
//   getSavedEvent: function(){
//     return axios.get("/api/user")
//   }

};
​