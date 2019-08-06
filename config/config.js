module.exports = {
  
    "development": {
      "username": "yf9x0jofx7b815qx",
      "password": "ifn0mw8jx2wt64je",
      "database": "ktskuh1zbqzwawq3",
      "host": "kavfu5f7pido12mr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      "dialect": "mysql" 
    },
    "test": {
      "username": process.env.MYSQL_USER,
      "password": process.env.MYSQL_KEY,
      "database": process.env.MYSQL_DBNAME,
      "host": process.env.MYSQL_HOST,
      "dialect": "mysql"
    },
    "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql"
    }
  }



