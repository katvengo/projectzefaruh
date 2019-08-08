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

        eventDescription: Sequelize.STRING,
        
        eventNote: Sequelize.STRING,

        eventCategory: Sequelize.STRING,

        eventImage: DataTypes.BLOB,

        eventLink: DataTypes.STRING,

        eventPreSale: DataTypes.STRING,

        eventPublicSell: DataTypes.STRING,
    
       
    });

    Event.associate = function(models){
        Event.belongsTo(models.User, {
            foreignKey: 'e_user_id' /* { 
                //allowNull: false
              }    */
        })
    }
    

    return Event;
      // This function grabs posts from the database and updates the view

  
};
