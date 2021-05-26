import "./SearchForm.css";


export default function SearchForm() {
    return (
      <div className="SearchForm">
        <form id="search-form" className="mb-3">
          <div className="row">
            <div className="input-group my-3 mx-3">
              <input
                type="text"
                placeholder="Type a city "
                className="form-control"
                id="city-input"
                aria-describedby="button-addon2"
              />
              <button
                className="btn mx-1"
                type="button"
              >
                Search
              </button>
              <button
                className="btn"
                type="button"
              >
                Here
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }