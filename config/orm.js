// dependencies
const connection = require("./connection.js");

// ORM
const orm = {

    // select
    selectAll: function (tableInput, cb) {
        const queryString = "SELECT * from ??";
        connection.query(queryString, [tableInput], function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    // insert
    insertOne: function (tableInput, columnName, burgerName, cb) {
        const queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableInput, columnName, burgerName], function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    // update
    updateOne: function (tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal, cb) {
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal], function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};

// export ORM
module.exports = orm;