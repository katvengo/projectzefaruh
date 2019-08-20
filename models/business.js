var Sequelize = require("sequelize");
var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var Business = sequelize.define("Business", {
    Name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    Address: { type: Sequelize.STRING},
    City: { type: Sequelize.STRING},
    State: { type: Sequelize.STRING},
    Country: { type: Sequelize.STRING},
    PostalCode: { type: Sequelize.STRING},
    
    image: DataTypes.BLOB,

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

    Description: Sequelize.STRING,
        
    Category: Sequelize.STRING,

    Link: DataTypes.STRING,

    resetPasswordToken: {
      type: DataTypes.STRING
    },

    resetPasswordExpires: {
      type: DataTypes.DATE
    }
  });

  Business.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the Business Model lifecycle
  // In this case, before a Business is created, we will automatically hash their password
  Business.addHook("beforeCreate", function(Business) {
    console.log("before create hook");
    business.password = bcrypt.hashSync(
      business.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
    // Business.associate = function(models) {
    //     // Associating Author with Posts
    //     // When an Author is deleted, also delete any associated Posts
    //     Business.hasMany(models.places, {
    //       onDelete: "cascade"
    //     });
    //     Business.hasMany(models.CreatedEvents, {
    //       onDelete: "cascade"
    //     });
    // }
    return Business;
};