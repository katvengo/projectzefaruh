const router = require("express").Router();
const search = require("../../APIs/API");

router
  .post("/", async function (req, res) {

    try {
      // pick out the query and time values from request object
      const {
        body: {
          query,
          time,
        }
      } = req;
       try{
        const apiEvents = await search(query, time); 
        //const ticketMasterEvents = apiEvents.ticketMaster.data[0]
        //const databaseEvents = apiEvents.database
        console.log(apiEvents)
        console.log("ticket Master Events ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~above")
        //const concatEvents = [ticketMasterEvents + databaseEvents]
        //const events = JSON.stringify(concatEvents) 
        
       return res.json(apiEvents);
       } catch (e) {
      //   console.log(e);
      }    
     
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  })


module.exports = router;

//  var ticketMasterEvents = apiEvents.ticketMaster.map(object => ({object}))
      //  var getEvents = ticketMasterEvents.map(object => (object))
       //console.log("events-------->")
       //console.log({getEvents})
       //var ticketMasterEvents = apiEvents.ticketMaster
       //var databaseEvents = apiEvents.database

       //var concatEvents = JSON.stringify(ticketMasterEvents + databaseEvents)
        // const dataBaseSearchEvents = await searchDatabase(query, time, location, date)
        // var events = apiEvents.ticketMaster.data._embedded.events  