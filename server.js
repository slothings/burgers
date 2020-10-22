// dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const router = require("./controllers/burgers_controller.js");
const path = require("path");

// express setup
const app = express();
const PORT = process.env.PORT || 8080;

// parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// routes
app.use(express.static(__dirname + "/public"));
app.use("/", router);

// start server
app.listen(PORT, function () {
    console.log("Listening on PORT " + PORT);
});