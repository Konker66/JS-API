const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");

search.addEventListener('click', () => {
    const APIKey = '98740f4ebc0d63bc0f8ba70090e5a091';
    const city = document.querySelector('.search-box input').value;
    if (city == "")
    return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temperature");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(".weather-details .humidity span");
      const wind = document.querySelector(".weather-details .wind span");

      switch (json.weather[0].main) {
        case 'Clear':
          image.src = "clear.png"; // replace with a valid image URL or path
          break;
        case 'Rain':
          image.src = "rain.png"; // replace with a valid image URL or path
          break;
        case 'Snow':
          image.src = "snow.png"; // replace with a valid image URL or path
          break;
        case 'Clouds':
          image.src = "cloud.png"; // replace with a valid image URL or path
          break;
        case 'Mist':
          image.src = "mist.png"; // replace with a valid image URL or path
          break;
        case 'Haze':
          image.src = "haze.png"; // replace with a valid image URL or path
          break;
        default:
          image.src = "cloud.png";
          break;
      }

      temperature.textContent = `${json.main.temp}°C`;
      description.textContent = json.weather[0].description;
      humidity.textContent = `${json.main.humidity}%`;
      wind.textContent = `${json.wind.speed} m/s`;
    })
    .catch(error => console.error("Error:", error));
});