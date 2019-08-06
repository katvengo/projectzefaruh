var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    var CreatedEvents = sequelize.define('CreatedEvents', {

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
    CreatedEvents.associate = function(models){
        CreatedEvents.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
              }   
        })
    }
    return CreatedEvents;
      // This function grabs favorite from the database and updates the view

  
};