// dependencies
const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static("public"));

// parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes and give the server access to them
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// start server
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});