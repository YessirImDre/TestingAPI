var run = function run(){
  // Code required for node.js access to MySQL server
  var mysql = require('mysql');

  // Code required for allowing console input and output
  const readline = require('readline');
  const IO = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  module.exports.inputOutput = IO;

  // Code required to create a connection to the MySQL server;
  // connection to the server will eventually be port-forwarded, these values currently do nothing
  var con = mysql.createConnection({
    host: "localhost",
    user: "sqluser",
    password: "password",
    database: "countrytable"
  });

  // Try connection to MySQL server, throw error if unsuccessful
  con.connect(function(err) {
    if (err) throw err;
    console.log("Successfully connected to the database!");

    // Reset country info table on load
    con.query("DELETE FROM countryinfo", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

  // Request data for all countries from API
  fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => {
      var listLength = Object.keys(data).length;

      for (let i = 0; i < listLength; i++)
      {
        loadData(data[i]);
      }
    })
    .catch(err => console.log("Error:", err));

    // Load name, capital, region, and population for each country into country info table in database,
    // throw error if unsuccessful
    function loadData({name, capital, region, population}){
      var countryName = name.common;
      var countryCapital = capital;
      var countryRegion = region;
      var countryPopulation = population;
      
      con.query('INSERT INTO countryinfo VALUES ("' + countryName + '", "' + countryCapital + '", "' + countryRegion + '", "' + countryPopulation + '")', function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
    
      console.log("Successful logging of country: " + countryName + "with data: ", countryCapital, countryRegion, countryPopulation);
    };

  module.exports.manageConnection = con;
};

// Export backend.js as a module for the main.js file
module.exports.run = run;