import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";
export default function WeatherInfo(props) {
    return (
<div className="WeatherInfo">
<h1>{props.data.name}</h1>
        <h3 className="date"><FormattedDate date={props.data.date} /></h3>
       
          <div className="row">
            <div className="col-6 temperature-box">
                <div className="icon">
<WeatherIcon code={props.data.icon} />
              </div>
             <div>
              <span className="temperature">{props.data.temperature}</span><span className="unit">°C</span>
            </div>
            </div>
            <div className="col-6 weather-description">
              <ul>
                <li className="description">{props.data.description}</li>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind}km/h</li>
              </ul>
            </div>
          </div>
        
      </div>

    );
}