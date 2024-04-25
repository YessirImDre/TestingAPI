// Load backend file with prerequisites
var backend = require("./backend.js");

backend.run();
var con = backend.manageConnection;
var userIO = backend.inputOutput;

/* NOTE: Code below the line will be removed or modified in a later update
-----------------------------------------------------------------------------*/

/*
con.connect(function(err) {
  if (err) throw err;
  userIO.question("Enter the name of a country: ", (cName) => {
    con.query("SELECT * FROM countryinfo WHERE name='" + cName + "'", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
    userIO.close();
  });
});

// Ask user to input the name of a country, then request the relevant data from the API
rl.question("Enter the valid name of a country: ", (countryName) => {
  var url = "https://restcountries.com/v3.1/name/" + countryName;
  fetchCountry(url);
  rl.close();
});

function fetchCountry(url)
{
  fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log("Error:", err));
}
*/