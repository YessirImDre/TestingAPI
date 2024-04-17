console.trace

fetch("https://restcountries.com/v3.1/alpha/us")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log("Error:", err));

function initialize({
  name,
  capital,
  callingCodes,
  population,
  currencies,
  region
}) {
  console.log({
    name,
    capital,
    callingCodes,
    population,
    currencies,
    region
 })
}