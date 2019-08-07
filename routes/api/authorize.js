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
          location,
          date,
        }
      } = req;
      const apiEvents = await search(query, time, location, date);
      // const dataBaseSearchEvents = await searchDatabase(query, time, location, date)

      console.log('------------------------------------------');
      var events = apiEvents.ticketMaster.data._embedded.events
      var dataBaseEvents = dataBaseSearchEvents
      //console.log({events})
      //console.log(apiEvents);
      return res.send({events, dataBaseEvents});
      // creating a function to search our database
    } catch (err) {
      console.log('error catch block was triggered');
      console.error(err);
      res.sendStatus(500);
    }
  })


module.exports = router;