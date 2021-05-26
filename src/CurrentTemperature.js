import React from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature() {
  return (
    <div className="CurrentTemperature float-left">
        <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="partly cloudy"
            className="src emoji float-left"
            id="icon"
        />
        <div className="temperature float-left">42</div>
        <span className="units float-left">
            {" "}
            <a href="/" className="active">
            °F
            </a>{" "}
            | <a href="/"> °C</a>
        </span>
        <br />
        <ul className="weather-stats float-left">
            <li>
            Humidity: <span>60</span>%
            </li>
            <li>
            Wind: <span>12</span>mph
            </li>
        </ul>
    </div>
  );
}
