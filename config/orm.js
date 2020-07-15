
const connection = require("../config/connection.js");


const orm = {
  createAll: function(tableInput, cb) {
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    let queryString = "INSERT INTO " + table;


    queryString += " (";
    queryString += cols[0]+","+cols[1];
    queryString += ") ";
    queryString += " VALUES (";
    queryString += "?,?";
    queryString += ") ";
   
    

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
 
  updateOne: function(table, objColVals, condition, cb) {
    let queryString = "UPDATE " + table;

    queryString += " SET devoured =";
    queryString += "1";
    queryString += " WHERE ";
    queryString += condition;

    
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};


module.exports = orm;
