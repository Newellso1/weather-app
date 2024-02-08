import { useState, useEffect } from "react";

export default function WeatherComponent() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=Cardiff,GB&appid=88abc1b065baada3538f3fb229234e7c"
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
  }, []);

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(1);
  };

  return (
    <div className="weather-app">
      {weatherData ? (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{kelvinToCelsius(weatherData.main.temp)}C</p>
          <p>{weatherData.weather[0].description}</p>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
