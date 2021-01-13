// LOAD DATA
// linking routes to a series of "data" sources.
// These data sources hold arrays of information.

// fs is a Node standard library package for reading and writing files
var fs = require("fs");

// ROUTING
module.exports = function (app) {
    // API POST Requests
    // Below code handles when a user submits form and thus submits data to the server.
    // Then the server saves the data to the contacts array
    app.post("/api/contacts", function (req, res) {
        // "utf8" encodes the raw buffer data in human-readable format
        fs.readFile(__dirname + "/../db/db.txt", "utf8", function (error, contactData) {
            if (error) {
                return console.log(error);
            }
            var newContact = req.body;
            newContact.id = Date.now();
            console.log(newContact)

            fs.writeFile(__dirname + "/../db/db.txt", JSON.stringify(newContact), function (error, newContact) {
                res.json({});
            })
        });

    });

}