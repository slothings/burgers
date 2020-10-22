// dependencies
const orm = require("../config/orm.js");

// we pass in query parameters as required by our ORM and also a callback to receive data
const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (value, cb) {
        orm.insertOne("burgers", value, function (res) {
            cb(res);
        });
    },
    updateOne: function (condition, id, cb) {
        condition = "devoured = true"
        orm.updateOne("burgers", condition, id, function (res) {
            cb(res);
        });
    }
};

// export
module.exports = burger;