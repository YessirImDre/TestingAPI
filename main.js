// Load backend file with prerequisites
import { run, manageConnection, inputOutput } from "./backend.js";

run();
var con = manageConnection;
var userIO = inputOutput;

function userRequest(){

  var name = document.getElementById("request").value;

  if (name.toLowerCase().includes("union")){
    console.log("Injection failed.");
    userIO.close();
  }
  else{
    con.query("SELECT * FROM countryinfo WHERE name='" + name + "'", function (err, result, fields) {
      if (err) throw err;
  
      var rows = "<tr><td>" + result[0].name + "</td><td>" + result[0].capital + "</td><td>" + result[0].continent + "</td><td>" + result[0].population + "</td></tr>";
      $(rows).appendTo("#country tbody");
  
      console.log("Name of country: " + result[0].name + '\n' +
        "Capital: " + result[0].capital + '\n' +
        "Continent: " + result[0].continent + '\n' +
        "Population: " + result[0].population + '\n');
    });
  }
};