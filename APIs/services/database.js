// const transformData = require('./ticketmasterToZafaraTransformation');
const axios = require('axios');
const moment = require('moment')


var defaultTime = moment(Date.now()).format('DDTHH:mm:ss').toString(); 
// console.log(defaultTime)
function searchThruDatabase(query, location, date, time) {
  const databaseURL = `/api/events/:${query}/:${location}/:${date}/:${time}`;
       return axios.get(databaseURL)
           .catch((err) =>{
           console.log(err)   
           })

        // 
         
          // .then(transformData)
          
}
//console.log("transforming" + transformData)
module.exports = searchThruDatabase