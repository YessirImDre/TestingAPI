var run = function run(){
    // Line of code required for node.js access to MySQL server
  var mysql = require('mysql');

  // Lines of code required for console input and output
  const readline = require('readline');
  const IO = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  module.exports.inputOutput = IO;

  var con = mysql.createConnection({
    host: "localhost",
    user: "sqluser",
    password: "password",
    database: "countrytable"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Successfully connected to the database!");

    con.query("DELETE FROM countryinfo", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

  fetch(/*"https://restcountries.com/v3.1/all?fields=name,capital,region,population"*/ "https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => {
      var listLength = Object.keys(data).length;

      for (let i = 0; i < listLength; i++)
      {
        loadData(data[i]);
      }
    })
    .catch(err => console.log("Error:", err));

    function loadData({name, capital, region, population}){
      var countryName = name.common;
      var countryCapital = capital;
      var countryRegion = region;
      var countryPopulation = population;
      
      con.query('INSERT INTO countryinfo VALUES ("' + countryName + '", "' + countryCapital + '", "' + countryRegion + '", "' + countryPopulation + '")', function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
    
      console.log(countryName, countryCapital, countryRegion, countryPopulation);
    };

  module.exports.manageConnection = con;
};

module.exports.run = run;