import React, { useState } from 'react';
import '../App.css';
import DateBuilder from './DateBuilder';

const api = {
  // key: "",
  base: "https://api.openweathermap.org/data/2.5/",
  baseImg: "https://api.openweathermap.org/img/w/"
}

const Weather = ({query, setQuery, selectedPlace, setSelectedplace}) =>{

  const [weather, setWeather] = useState('');

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${selectedPlace || query}&units=metric&APPID=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          setSelectedplace(null);
        });
    }
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app' }>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search.."
            onChange={e => setQuery(e.target.value)}
            value={selectedPlace}
            onKeyPress={search}
            itemID="search"
          />
        </div>

        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <DateBuilder />
            </div>
            <div className="weather-box">
              <div className="temp">
                {/* in vscode press Alt + 0176 for degree sign*/}
                {Math.round(weather.main.temp)}°c
              </div>
              <div className="weather-icon">
              <img src={api.baseImg+weather.weather[0].icon+".png"} alt="icon"/>
              </div>
              <div className="weather">
                {weather.weather[0].main}
              </div>
            </div>
          </div>
        ) : (
          <div className="weather-box">
            <div className="temp not-found">
              Not Found
            </div>
          </div>
        )}
      </main>

    </div>
  );
}

export default Weather;