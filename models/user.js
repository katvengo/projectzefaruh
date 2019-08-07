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
// ! this
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

  // ! START
  // This is a class method, it is not called on an individual user object, but rather the class as a whole. e.g. User.authenticate('user1', 'password1234')
  User.authenticate = async function(username, password) {
    const user = await User.findOne({ where: { username } });

    // bcrypt is a one-way hashing algorithm that allows us to store strings on the database rather than the raw passwords. Check out the docs for more detail
    if (bcrypt.compareSync(password, user.password)) {
      return user.authorize();
    }

    throw new Error("invalid password");
  };

  // in order to define an instance method, we have to access the User model prototype. This can be found in the sequelize documentation
  User.prototype.authorize = async function() {
    const { AuthToken } = sequelize.models;
    const user = this;

    // create a new auth token associated to 'this' user by calling the AuthToken class method we created earlier and passing it the user id
    const authToken = await AuthToken.generate(this.id);

    // addAuthToken is a generated method provided by sequelize which is made for any 'hasMany' relationships
    await user.addAuthToken(authToken);

    return { user, authToken };
  };

  User.prototype.logout = async function(token) {
    // destroy the auth token record that matches the passed token
    sequelize.models.AuthToken.destroy({ where: { token } });
  };
  // ! END

  return User;
};
