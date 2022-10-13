import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather() {

    const [city, setCity] = useState("")
    const [weather, setWeather] = useState({});

    function updateCity(event) {
setCity(event.target.value);
    }

    function displayWeather(response) {
      setWeather({
        name: response.data.name,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        temperature: Math.round(response.data.main.temp),
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed)
      })

    }

    function handleSubmit(event) {
      event.preventDefault();
      let units = "metric";
      let apiKey = "eb2ee96fce77dd8a4eaad97e550c01d8";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
      axios.get(apiUrl).then(displayWeather);
    }

    return (
      <div className="Weather">
        <div className="search-engine">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  autoFocus={true}
                  className="form-control"
                  onChange={updateCity}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
        </div>

        <h1>{weather.name}</h1>
        <h3>Thursday 9:00 October 13, 2022</h3>
        <div className="weather-info">
          <div className="row">
            <div className="col-6 temperature-box">
              <img src={weather.icon} alt={weather.description} className="icon" />
              <span className="temperature">{weather.temperature}</span><span className="unit">°C</span>
            </div>
            <div className="col-6">
              <ul>
                <li className="description">{weather.description}</li>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {weather.wind}km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}