var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    var Places = sequelize.define('Places', {

        Name: { type: Sequelize.STRING, allowNull: false },

        Address: { type: Sequelize.STRING, allowNull: false },
        City: { type: Sequelize.STRING, allowNull: false },
        State: { type: Sequelize.STRING, allowNull: false },
        Country: { type: Sequelize.STRING, allowNull: false },
        PostalCode: { type: Sequelize.STRING, allowNull: false },
        
        PriceLow: DataTypes.STRING,

        PriceHigh: DataTypes.STRING,

        PhoneNumber: DataTypes.STRING,

        HoursSundayStart: DataTypes.STRING,
        HoursMondayStart: DataTypes.STRING,
        HoursTuesdayStart: DataTypes.STRING,
        HoursWednesdayStart: DataTypes.STRING,
        HoursThursdayStart: DataTypes.STRING,
        HoursFridayStart: DataTypes.STRING,
        HoursSaturdayStart: DataTypes.STRING,

        HoursSundayEnd: DataTypes.STRING,
        HoursMondayEnd: DataTypes.STRING,
        HoursTuesdayEnd: DataTypes.STRING,
        HoursWednesdayEnd: DataTypes.STRING,
        HoursThursdayEnd: DataTypes.STRING,
        HoursFridayEnd: DataTypes.STRING,
        HoursSaturdayEnd: DataTypes.STRING,

        Age: DataTypes.STRING,

        Description: Sequelize.STRING,
        
        Menu: Sequelize.STRING,

        Category: Sequelize.STRING,

        Image: DataTypes.BLOB,

        Link: DataTypes.STRING,

        HappyHour: DataTypes.STRING,

        HappyHourInfo: DataTypes.STRING,
        
    });

    // Places.associate = function(models){
    //     Places.belongsTo(models.Business, {
    //         foreignKey: 'e_user_id' /* { 
    //             //allowNull: false
    //           }    */
    //     })
    // }
    
    return Places;
      // This function grabs posts from the database and updates the view
};
