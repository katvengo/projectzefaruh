var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.

module.exports = function (sequelize, DataTypes) {
    var Event = sequelize.define('Event', {

        eventName: { type: Sequelize.STRING, allowNull: false },

        eventLocation: { type: Sequelize.STRING, allowNull: false },
        
        eventPriceRange: DataTypes.STRING,
    
        eventDate:  { 
            type: Sequelize.DATEONLY, 
            defaultValue: Sequelize.NOW 
            },
            
        eventTime: {
            type: DataTypes.TIME,
        },

        eventDescription: { type: Sequelize.STRING, allowNull: false },

        eventCategory: { type: Sequelize.STRING, allowNull: false },

        eventImage: DataTypes.BLOB,
    
       
    });

    return Event;
};