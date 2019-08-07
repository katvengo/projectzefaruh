var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      unique: true
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
    image: DataTypes.BLOB,
    intersts: DataTypes.STRING,
    resetPasswordToken: {
      type: DataTypes.STRING
    },

    resetPasswordExpires: {
      type: DataTypes.DATE
    }
  });

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function(user) {
    console.log("before create hook");
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
// ! authentication association, needs work
  User.associate = function(models) {
    User.hasMany(models.AuthToken);
  };
// !

  User.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.FavoriteEvents, {
      onDelete: "cascade"
    });
  };
  User.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.FavoriteEvents, {
      onDelete: "cascade"
    });
    User.hasMany(models.CreatedEvents, {
      onDelete: "cascade"
    });
  };

  
  return User;
};
