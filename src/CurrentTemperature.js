import React from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature() {
  return (
    <div className="CurrentTemperature float-start">
        <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="partly cloudy"
            className="src emoji"
            id="icon"
        />
        <span className="temperature mx-2">42</span>
        <span className="units">
            {" "}
            <a href="/" className="active">
            °F
            </a>{" "}
            | <a href="/"> °C</a>
        </span>
        <br />
        <ul className="weather-stats ml-4">
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
