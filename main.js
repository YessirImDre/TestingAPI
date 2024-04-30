// Load backend file with prerequisites
var backend = require("./backend.js");

backend.run();
var con = backend.manageConnection;
var userIO = backend.inputOutput;

function userRequest(){
  // Ask user to input the name of a country, then fetch the requested data from the database
  userIO.question("Enter the name of a country: ", (cName) => {

    // Simple SQL Injection check
    if (cName.toLowerCase().includes("union")){
      console.log("Injection failed.");
      userIO.close();
    }
    else{
      con.query("SELECT * FROM countryinfo WHERE name='" + cName + "'", function (err, result, fields) {
        if (err) throw err;
        console.log("Name of country: " + result[0].name + '\n' +
          "Capital: " + result[0].capital + '\n' +
          "Continent: " + result[0].continent + '\n' +
          "Population: " + result[0].population + '\n');
      });
      userIO.close();
    }
  });
}