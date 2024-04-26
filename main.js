// Load backend file with prerequisites
var backend = require("./backend.js");

backend.run();
var con = backend.manageConnection;
var userIO = backend.inputOutput;

// Ask user to input the name of a country, then request the relevant data from the database
userIO.question("Enter the name of a country: ", (cName) => {
  con.query("SELECT * FROM countryinfo WHERE name='" + cName + "'", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  userIO.close();
});