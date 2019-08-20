// const transformData = require('./ticketmasterToZafaraTransformation');
const axios = require('axios');
const moment = require('moment');
const db = require("../../models")
var Sequelize = require("sequelize");
const Op = Sequelize.Op

var defaultDate = moment(Date.now()).format('YYYY-MM-DD').toString(); 

var defaultTime = moment(Date.now()).format('hh:mm:ss').toString(); 

console.log(defaultDate)
console.log(defaultTime)
function searchThruDatabase(query, location, defaultDate, defaultTime) {
  return db.Event.findAll({
    where: { 
        eventName: {
            [Op.or]: {
                [Op.like]: query,
                [Op.ne]: null
            }
        },
        eventLocation: {
            [Op.or]: {
                [Op.like]: location,
                [Op.ne]: null
            }
        },
        eventDateStart: {
            [Op.or]: {
                [Op.like]: defaultDate,
                [Op.ne]: null
            }
        },
        eventDateEnd: {
            [Op.or]: {
                [Op.like]: defaultDate,
                [Op.ne]: null
            }
        },

        eventTime: {
            [Op.or]: {
                [Op.like]: defaultTime,
                [Op.ne]: null
            }
        }
    
    }
        }).then(event => {
            console.log(event);
            return event
          });
    }

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
          //console.log("transforming" + transformData)
        //   console.log(searchThruDatabase('banana', 'my moms house', null, null))
module.exports = searchThruDatabase