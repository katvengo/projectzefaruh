var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    var FavoriteEvents = sequelize.define('FavoriteEvents', {

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
    FavoriteEvents.associate = function(models){
        FavoriteEvents.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
              }   
        })
    }
    return FavoriteEvents;
      // This function grabs favorite from the database and updates the view

  
};