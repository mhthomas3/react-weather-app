import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SearchForm from './SearchForm';
import LocationAndDate from './LocationAndDate';
import CurrentTemperature from './CurrentTemperature'

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchForm />
        <div className="container">
          <div className="row">
              <div className="col-7 float-start">
                <CurrentTemperature />
              </div>
              <div className="col-5">
                <LocationAndDate />
              </div>
          </div>
        </div>
          <span className="open-source-link">
          <a
            href="https://github.com/mhthomas3/vanilla-weather-app"
            target="_blank" rel = "noreferrer"
          >
            Open-source code
          </a>{" "}
          by Morgan Thomas
        </span>
      </div>
    </div>
  );
}

export default App;
