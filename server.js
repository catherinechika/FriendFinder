var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("app/public"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ---------------ROUTES-----------
require("./app/routing/apiRoutes.js")(app, path);
require("./app/routing/htmlRoutes.js")(app, path);

// ---------------------------------


app.listen(PORT, function () {
    console.log("http://localhost:" + PORT + "/home");
});
