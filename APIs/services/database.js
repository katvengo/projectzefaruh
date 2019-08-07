// const transformData = require('./ticketmasterToZafaraTransformation');
const axios = require('axios');
const moment = require('moment')


var defaultTime = moment(Date.now()).format('DDTHH:mm:ss').toString(); 
// console.log(defaultTime)
function searchThruDatabase(query, location, date, time) {
       return axios.get("/events/", {
         params: {
          query: query,
          // location: location,
          // date: date,
          // time: time
         }
       })
           .catch((err) =>{
           console.log(err)   
           })

        // 
         
          // .then(transformData)
          
}
//console.log(searchThruDatabase('rollerblade'))
//console.log("transforming" + transformData)
module.exports = searchThruDatabase