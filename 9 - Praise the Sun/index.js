const weatherForm = document.querySelector(".weatherForm");
const weatherInfo = document.querySelector(".weatherInfo");
const weatherSummary = document.querySelector("weatherSummary");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "dd4fc5e1ffea9ada5b68d80153c6f20e";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.error(error);
            displayError(error);
        }
        
    } else {
        displayError("Please enter a valid city ❕");
    }

});

async function getWeatherData(city) {
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    const response = await fetch(apiUrl);

    console.log(response);

    if (!response.ok) {
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
}

function displayWeatherInfo(data) {
    const{name: city,
          main: {temp,humidity},
          weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex"

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const weatherSummary = document.createElement("div");
    const weatherInfo = document.createElement("div");
    const bar = document.createElement("span");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherImg = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(0)}°C`
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description.trim().charAt(0).toUpperCase() + description.trim().slice(1).toLowerCase();
    bar.textContent = "|";
    weatherInfo.style.gap = "15px"
    weatherImg.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    cityDisplay.classList.add("txt-center");
    
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherForm.classList.add("weatherImg");
    weatherImg.classList.add("weatherImg")
    
    weatherInfo.classList.add("weatherInfo");
    weatherInfo.classList.add("d-flex");
    weatherInfo.classList.add("jc");
    weatherInfo.classList.add("ai");

    weatherInfo.appendChild(tempDisplay);
    weatherInfo.appendChild(bar);
    weatherInfo.appendChild(humidityDisplay);
    
    weatherSummary.classList.add("weatherSummary");
    weatherSummary.classList.add("d-flex");
    weatherSummary.classList.add("flex-column");
    weatherSummary.classList.add("txt-center");

    weatherSummary.appendChild(weatherImg);
    weatherSummary.appendChild(descDisplay);

    card.appendChild(cityDisplay);
    card.appendChild(weatherInfo);
    card.appendChild(weatherSummary);
}

function getWeatherEmoji(weatherId) {
   
    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈";
        case (weatherId >= 300 && weatherId < 400):
            return "⛈";
        case (weatherId >= 400 && weatherId < 500):
            return "⛈";
        case (weatherId >= 500 && weatherId < 600):
            return "⛈";
        case (weatherId >= 600 && weatherId < 700):
            return "❄";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫";
        case (weatherId === 800):
            return "☀";
        case (weatherId >= 801 && weatherId < 810):
            return "☁";
    
        default:
            return "❓"
            break;
    }

}

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}



