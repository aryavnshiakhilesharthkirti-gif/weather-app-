import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import './App.css';

const API_KEY ='bd55ab25501512db3fbe773dffc51568'

function App() {
  const [city, setCity] = useState('London');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(false);

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError(null);

      // Current weather API call
      const currentResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );

      setCurrentWeather(currentResponse.data);

      // Forecast API call (5 day forecast)
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${API_KEY}`
      );

      // Process forecast data - get one forecast per day
      const dailyForecasts = [];
      const seenDates = new Set();

      forecastResponse.data.list.forEach((item) => {
        const date = new Date(item.dt * 1000).toLocaleDateString();
        if (!seenDates.has(date) && dailyForecasts.length < 5) {
          seenDates.add(date);
          dailyForecasts.push(item);
        }
      });

      setForecast(dailyForecasts);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch weather data. Please check the city name.');
      setCurrentWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = (searchCity) => {
    if (searchCity.trim()) {
      setCity(searchCity);
      fetchWeather(searchCity);
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`App ${isDark ? 'dark' : 'light'}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Weather App</h1>
          <button
            onClick={toggleTheme}
            className="bg-white bg-opacity-20 text-white px-6 py-2 rounded-full hover:bg-opacity-30 transition"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />

        {/* Loading State */}
        {loading && (
          <div className="text-center text-white text-xl mt-8">
            Loading weather data...
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-500 text-white p-4 rounded-lg mt-8 text-center">
            {error}
          </div>
        )}

        {/* Current Weather */}
        {currentWeather && !loading && (
          <CurrentWeather data={currentWeather} />
        )}

        {/* Forecast */}
        {forecast.length > 0 && !loading && (
          <Forecast data={forecast} />
        )}
      </div>
    </div>
  );
}

export default App;
