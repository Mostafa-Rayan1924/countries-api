let btn = document.querySelector(".btn");
let countryName = document.querySelector("input");
let result = document.querySelector("#result");

btn.addEventListener("click", get);
async function get() {
  let countryValue = countryName.value;
  if (countryValue.length < 3) {
    result.innerHTML = `<h1 class="error">please fill right data</h1>`;
  }
  let countryUrl = `https://restcountries.com/v3.1/name/${countryValue}?fulltext=true`;
  const response = await fetch(countryUrl);
  const data = await response.json();
  console.log(data[0]);
  result.innerHTML = `
  <img class="img" src="${data[0].flags.svg}" alt="">
  <h1> ${data[0].name.common}</h1>
  <h3><span>Capital:</span> ${data[0].capital[0]}</h3>
  <h3><span>continents:</span> ${data[0].continents[0]}</h3>
  <h3><span>currencies:</span> ${Object.keys(data[0].currencies)[0]}</h3>
  <h3><span>fifa:</span> ${data[0].fifa}</h3>
  <h3><span>population:</span> ${data[0].population}</h3>
  <h3><span>languages:</span> ${Object.values(data[0].languages)
    .toString()
    .split(",")
    .join(", ")}</h3>
  `;
}
