import "./LocationAndDate.css";

export default function LocationAndDate() {
  return (
    <div className="LocationAndDate">
      <ul>
        <li className="city">Evanston, IL</li>
        <li className="day-time">Last updated at:</li>
        <li className="day-time">
          <span id="date">Monday 10:00 AM</span>
        </li>
        <li className="current-weather-descrip">Partly Cloudy</li>
      </ul>
    </div>
  );
}