import { useState, useEffect } from "react";

import DropdownMenu from "./DropdownMenu";

export default function WeatherComponent({ city, setCity }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},GB&appid=88abc1b065baada3538f3fb229234e7c`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, [city]);

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(0);
  };

  return (
    <div className="weather-app">
      {weatherData ? (
        <div>
          <DropdownMenu city={city} setCity={setCity} />
          <img
            alt=""
            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
          />
          <div className="stats">
            <div className="temp">
              <h4>Temp</h4>
              {kelvinToCelsius(weatherData.main.temp)}c
            </div>
            <div className="feel">
              <h4>Feels like</h4>
              {kelvinToCelsius(weatherData.main.feels_like)}c
            </div>
            <div className="wind">
              <h4>Wind speed</h4>
              {weatherData.wind.speed.toFixed(0)}mph
            </div>
          </div>
        </div>
      ) : (
        <div>
          <DropdownMenu city={city} setCity={setCity} />
        </div>
      )}
    </div>
  );
}
