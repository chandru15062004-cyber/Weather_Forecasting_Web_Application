const apiKey = "d3fec3c0fc362b80fa9e6380ef1ec838";

function getWeather() {
  const city = document.getElementById("city").value;

  if (city === "") {
    alert("Please enter a city");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("temp").innerText =
        "Temperature: " + data.main.temp + " °C";

      document.getElementById("humidity").innerText =
        "Humidity: " + data.main.humidity + "%";

      document.getElementById("wind").innerText =
        "Wind Speed: " + data.wind.speed + " m/s";

      document.getElementById("condition").innerText =
        "Condition: " + data.weather[0].main;
    })
    .catch(() => {
      alert("City not found");
    });
}
