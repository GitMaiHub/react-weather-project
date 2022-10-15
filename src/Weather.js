import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css"

export default function Weather(props) {


    const [weather, setWeather] = useState({ load: false });
const [city, setCity] = useState(props.defaultCity);
   
    function displayWeather(response) {
      setWeather({
        load: true,
        name: response.data.name,
        date: new Date(response.data.dt * 1000),
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        temperature: Math.round(response.data.main.temp),
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed)
      })
    }
    function search() {
let units = "metric";
const apiKey = "eb2ee96fce77dd8a4eaad97e550c01d8";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(displayWeather);
    }
function handleSubmit(event) {
  event.preventDefault();
  search();
}
function updateCity(event) {
setCity(event.target.value);
}
   

if (weather.load) {
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
      <WeatherInfo data={weather} />
      </div>
        ); 
        } else {

  search();
  return "Loading...";

        }
}