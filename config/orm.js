// dependencies
const connection = require("../config/connection.js");

// ORM
const orm = {

    // select
    selectAll: function (tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // insert
    insertOne: function (table, value, cb) {
        const queryString = "INSERT INTO " + table + " SET ?";
        connection.query(queryString, value, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // update
    updateOne: function (table, condition, id, cb) {
        const queryString = "UPDATE " + table + " SET " + condition + " WHERE id = ?";
        connection.query(queryString, id, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

// export
module.exports = orm;