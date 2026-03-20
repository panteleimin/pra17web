
const countryCities = {
  ger: ["Berlin", "Munich", "Hamburg"],
  usa: ["New York", "Los Angeles", "Chicago"],
  ukr: ["Kyiv", "Lviv", "Odesa"]
};

const countrySelect = document.getElementById("country");
const citiesSelect = document.getElementById("cities");
const result = document.getElementById("result");

function updateCities() {
  const selectedCountry = countrySelect.value;
  const cities = countryCities[selectedCountry];

  citiesSelect.innerHTML = "";

  cities.forEach(city => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    citiesSelect.appendChild(option);
  });

}

function updateResult() {
  const countryName = countrySelect.options[countrySelect.selectedIndex].text;
  const cityName = citiesSelect.value;
  result.textContent = `Ви обрали: ${countryName}, місто: ${cityName}`;
}

updateResult();
updateCities();

countrySelect.addEventListener("change", updateCities);
citiesSelect.addEventListener("change", updateResult);
