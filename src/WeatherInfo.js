import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
    return (
<div className="WeatherInfo">
<h1>{props.data.name}</h1>
        <h3><FormattedDate date={props.data.date} /></h3>
       
          <div className="row">
            <div className="col-6 temperature-box">
              <img src={props.data.icon} alt={props.data.description} className="icon" />
              <span className="temperature">{props.data.temperature}</span><span className="unit">°C</span>
            </div>
            <div className="col-6">
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