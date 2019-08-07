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
      const apiEvents = await search(query, time);
      // const dataBaseSearchEvents = await searchDatabase(query, time, location, date)
      var events = apiEvents.ticketMaster.data._embedded.events
     
      // for (let i = 0; i < events.length; i++) {
      //  array[i];
        
      // }

      // var formattedEvents = {
      //   eventName: event.name,

      //   eventLocation: event.event._embedded.venues[0].name,
        
      //   eventPriceRange: event.eventPriceRanges[0].max,
    
      //   eventDate: event.dates.start.localDate,
            
      //   eventTime: event.dates.start.localTime,

      //   eventDescription: event.info,

      //   eventCategory: event.classifications[0].segment.name,

      //   eventImage: event.images[0].url,

      //   eventURL: event.url,

      //   eventPreSale: event.sales.presales[0].startDateTime,

      //   eventPublicSell: event.sales.public[0].startDateTime,
      
      // }
      console.log('------------------------------------------');
      //var events = apiEvents.ticketMaster.data._embedded.events
      //console.log(events)
      // events ={

      // }
      // var dataBaseEvents = dataBaseSearchEvents
      //console.log({events})
      //console.log(apiEvents);
      return res.send(events);
      // creating a function to search our database
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  })


module.exports = router;