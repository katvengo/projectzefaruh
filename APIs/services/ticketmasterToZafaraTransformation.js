 var searchTicketMaster = require("./ticketmasterDataService")
// console.log(searchTicketMaster())

var keyValue = {
key: '',
eventName: '',
eventDate: '',
eventDateStart: '',
eventDateEnd: '',
eventImage: '',
eventDescription: '',
eventCategory: '',
eventLocation: '',
eventTime: '',
eventPriceRange: '',
locationName: '',
locationAddress: '',
locationCity: '',
locationPostalCode: '',
locationState: '',
locationDistance: '',
locationDistanceUnits: ''

}

// function transformRecord(ticketMasterEventRecord) {
//     var data = ticketMasterEventRecord
//     console.log({data})
   
//     // var events = ticketMasterEventRecord._embedded.events
//     //console.log(events.id)
//     return {
//         //key: events.id,
//         // eventName: events.name,
//         // eventDateStart: ticketMasterEventRecord.start.locale,
//         // eventDateEnd: ticketMasterEventRecord.start.locale,
//         // image: ticketMasterEventRecord.image[0],
//         // link: ticketMasterEventRecord.url,
//         // description: ticketMasterRecord.info
//         // note: ticketMasterEventRecord.pleaseNote,
//         // locationName:  event._embedded.venues[0].name,
//         // locationAddress: event._embedded.venues[0].address.line1,
//         // locationCity: event._embedded.venues[0].city.name,
//         // locationPostalCode:event._embedded.venues[0].postalCode,
//         // locationState:event._embedded.venues[0].state.name,
//         // locationDistance:event._embedded.venues[0].distance,
//         // locationDistanceUnits:event._embedded.venues[0].units

//     }
// }
//console.log(transformRecord())
//console.log(eventName)

// function transformData (ticketMasterEventRecord) {
//     //console.log(ticketMasterData);
//     return ticketMasterEventRecord.map(transformRecord);
// }
// console.log(transformData())
// module.exports = transformData


// var name = events.name
//        var type = events.type
//        var id = events.id
      //  var link = events.url
    //    var dateStart = events.dates.start.localDate
    //    var startTime = events.dates.start.localTime
       //convert date and time using momment.js
      //  var imageZero = events.images[0]
      //  var imageOne = events.images[1]
      //  var imageTwo = events.images[2]
       // var note = events.pleaseNote
        // var priceLow = events.priceRange[0].min
        // var priceHigh = events.priceRange[0].max
        // var priceRange = `${priceLow} - ${priceHigh}`
    //    console.log(
    //      `Name ${name}
    //       type  ${type} 
    //       id    ${id}  
    //       note ${note}
           
    //    )
        // var events = {
        //         id: id,
        //         name: name,
        //         type: type,
        //         // link: link,
        //         dateStart: dateStart,
        //         startTime: startTime
        //         };