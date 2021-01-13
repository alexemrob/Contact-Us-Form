// DEPENDENCIES
// path package to get the correct file path for the html
var path = require("path");

// ROUTING
module.exports = function (app) {
    // HTML GET Requests
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};