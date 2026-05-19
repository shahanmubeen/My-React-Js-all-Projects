import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const API_KEY = "753c15c64eaf51db1e13c821e4a769a1";

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    const cityName = city.trim();

    if (!cityName) {
      setError("Please enter a city name");
      return;
    }

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      setWeather(res.data);
      setError("");
    } catch (err) {
      console.log(err.response?.data);
      setError("City not found or wrong API key!");
      setWeather(null);
    }
  };

  return (
    <div className="app">
      <h1>🌦️ Weather App</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Enter city (Murree, Lahore, Islamabad)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={getWeather}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="card">
          <h2>{weather.name}, {weather.sys.country}</h2>

          <h1>🌡️ {weather.main.temp}°C</h1>

          <p>☁️ {weather.weather[0].main}</p>

          <div className="info">
            <p>💧 Humidity: {weather.main.humidity}%</p>
            <p>🌬️ Wind: {weather.wind.speed} km/h</p>
            <p>📍 Feels Like: {weather.main.feels_like}°C</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;