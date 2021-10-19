import moment from "moment";
import { memo } from "react";
import "./style.css";

const refresh = () => {
  window.location.reload();
};

function Weather({ weatherData }) {
  return (
    <div className="weather-container">
      <div className="weather--box">
        <div className="reload--container">
          <button onClick={refresh}>Reload <i className='fas fa-sync'></i></button>
        </div>
        <div className="city">
          <p>{weatherData.name}</p>
        </div>

        <div className="temp">
          <p>{weatherData.main.temp} &deg;c</p>
        </div>

        <div className="dash-container">
          <div className="dash"></div>
        </div>

        <div className="sun">
          <div className="sun-span">
            <span className="material-icons">wb_sunny</span> <br />
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </div>
          <div className="sun-span">
            <span className="material-icons">brightness_medium</span> <br />
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </div>
        </div>

        <div className="des">
          <span className="material-icons">cloud</span> <br />
          <p>{weatherData.weather[0].description}</p>
        </div>

        <div className="humidity">
          <p>
            <span>Humidity</span> <br /> {weatherData.main.humidity} %
          </p>
        </div>

        <div className="date">
          <div>
            <span>Day</span> <br /> {moment().format("dddd")}
          </div>
          <div>
            <span>Date</span> <br />
            {moment().format("LL")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Weather);
