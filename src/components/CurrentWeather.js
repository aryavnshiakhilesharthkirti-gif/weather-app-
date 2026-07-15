import React from 'react';
import { FiDroplets, FiWind, FiEye } from 'react-icons/fi';

function CurrentWeather({ data }) {
  if (!data) return null;

  const temp = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const visibility = (data.visibility / 1000).toFixed(1);

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 mb-8 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Side - Temperature and Description */}
        <div className="flex items-center gap-6 mb-6 md:mb-0">
          <img 
            src={iconUrl} 
            alt={description}
            className="w-24 h-24"
          />
          <div>
            <div className="text-6xl font-bold">{temp}°C</div>
            <div className="text-xl capitalize text-gray-100 mt-2">{description}</div>
            <div className="text-sm text-gray-300 mt-1">Feels like {feelsLike}°C</div>
          </div>
        </div>

        {/* Right Side - Details */}
        <div className="grid grid-cols-3 gap-8">
          {/* Humidity */}
          <div className="flex flex-col items-center">
            <FiDroplets size={32} className="mb-2" />
            <div className="text-sm text-gray-300">Humidity</div>
            <div className="text-2xl font-semibold">{humidity}%</div>
          </div>

          {/* Wind Speed */}
          <div className="flex flex-col items-center">
            <FiWind size={32} className="mb-2" />
            <div className="text-sm text-gray-300">Wind Speed</div>
            <div className="text-2xl font-semibold">{windSpeed} m/s</div>
          </div>

          {/* Visibility */}
          <div className="flex flex-col items-center">
            <FiEye size={32} className="mb-2" />
            <div className="text-sm text-gray-300">Visibility</div>
            <div className="text-2xl font-semibold">{visibility} km</div>
          </div>
        </div>
      </div>

      {/* City and Country */}
      <div className="mt-6 pt-6 border-t border-white border-opacity-20">
        <p className="text-lg">
          <span className="font-semibold">{data.name}</span>
          <span className="text-gray-300 ml-2">{data.sys.country}</span>
        </p>
      </div>
    </div>
  );
}

export default CurrentWeather;
