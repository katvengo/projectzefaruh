var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
module.exports = function (sequelize, DataTypes) {
    var Event = sequelize.define('favorite', {

        favoriteEventName: { type: Sequelize.STRING, allowNull: false },

        favoriteEventLocation: { type: Sequelize.STRING, allowNull: false },
        
        favoriteEventPriceRange: DataTypes.STRING,
    
        favoriteEventDate:  { 
            type: Sequelize.DATEONLY, 
            defaultValue: Sequelize.NOW 
            },
            
        favoriteEventTime: {
            type: DataTypes.TIME,
        },

        favoriteEventDescription: { type: Sequelize.STRING, allowNull: false },

        favoriteEventCategory: { type: Sequelize.STRING, allowNull: false },

        favoriteEventImage: DataTypes.BLOB,
    
       
    });

    return Event;
      // This function grabs favorite from the database and updates the view

  
};