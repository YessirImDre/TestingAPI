// Lines of code required for console input and output
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
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