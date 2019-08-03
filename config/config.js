module.exports = {
  
    "development": {
      "username": "root",
      "password": "root",
      "database": "zefaruhevents",
      "host": '127.0.0.1',
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



