// const transformData = require('./ticketmasterToZafaraTransformation');
const axios = require('axios');
const moment = require('moment');
const db = require("../../models")


//var defaultTime = moment(Date.now()).format('DDTHH:mm:ss').toString(); 
// console.log(defaultTime)
function searchThruDatabase(query, time) {
  return db.Event.findAll({
        where: {
            eventName: query,
            // eventLocation: req.params.eventLocation,
            // eventDate: req.params.eventDate,
            eventTime: time,
            // eventCategory: req.params.eventCategory,
        }
    })
}
    // then(function (dbEvents) {
    //     return res.json(dbEvents)
    // })

      //  return axios.get("/events/", {
      //    params: {
      //     query: query,
      //     // location: location,
      //     // date: date,
      //     // time: time
      //    }
      //  })
      //      .catch((err) =>{
      //      console.log(err)   
      //      })

      //   // 
         
      //     // .then(transformData)
          

//console.log(searchThruDatabase('rollerblade'))
//console.log("transforming" + transformData)
module.exports = searchThruDatabase