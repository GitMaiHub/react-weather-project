import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

export default function FormattedDate(props) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusdays", "Friday", "Saturday"];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
      hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
      minutes = `0${minutes}`;
  }
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();
  let year = props.date.getFullYear();
    return (
    <div className="FormattedDate">
        {day} {hours}:{minutes} {month} {date}, {year}
    </div>
    );
}