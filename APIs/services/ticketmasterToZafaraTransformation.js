//  var searchTicketMaster = require("./ticketmasterDataService")

// var keyValue = {
// key: '',
// eventName: '',
// eventDate: '',
// eventDateStart: '',
// eventDateEnd: '',
// eventImage: '',
// eventDescription: '',
// eventCategory: '',
// eventLocation: '',
// eventTime: '',
// eventPriceRange: '',
// locationName: '',
// locationAddress: '',
// locationCity: '',
// locationPostalCode: '',
// locationState: '',
// locationDistance: '',
// locationDistanceUnits: ''

// }

function transformRecord(ticketMasterEventRecord) {
    //var data = ticketMasterEventRecord
    //console.log({data})
   
    // var events = ticketMasterEventRecord._embedded.events
    //console.log(events.id)
    return {
        key: ticketMasterEventRecord.id,
        eventName: ticketMasterEventRecord.name,
        eventDateStart: ticketMasterEventRecord.dates,
        eventDateEnd: ticketMasterEventRecord.dates,
        eventImage: ticketMasterEventRecord.images.map(image => ({image})),
        eventLink: ticketMasterEventRecord.url,
        eventDescription: ticketMasterEventRecord.info,
        eventNote: ticketMasterEventRecord.pleaseNote,
        eventLocation: ticketMasterEventRecord._embedded.venues[0],
        //eventPriceRange: ticketMasterEventRecord.priceRanges.map(priceRanges => (priceRanges)),
        //eventCategory: ticketMasterEventRecord.classifictions.map(classifications => ({classifications}))
    }
}


// function transformData (ticketMasterEventRecord) {
//     //console.log(ticketMasterData);
//     return ticketMasterEventRecord.map(transformRecord);
// }
// console.log(transformData())
module.exports = transformRecord
