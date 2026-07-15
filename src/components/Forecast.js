import React from 'react';

function Forecast({ data }) {
  if (!data || data.length === 0) return null;

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-white mb-6">5-Day Forecast</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {data.map((forecast, index) => {
          const temp = Math.round(forecast.main.temp);
          const description = forecast.weather[0].description;
          const icon = forecast.weather[0].icon;
          const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

          return (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 text-white text-center hover:bg-opacity-20 transition"
            >
              <p className="font-semibold mb-3">{formatDate(forecast.dt)}</p>
              <img
                src={iconUrl}
                alt={description}
                className="w-16 h-16 mx-auto mb-3"
              />
              <p className="text-3xl font-bold mb-2">{temp}°C</p>
              <p className="text-sm capitalize text-gray-200">{description}</p>
              <div className="mt-4 pt-4 border-t border-white border-opacity-20">
                <p className="text-xs text-gray-300">
                  💧 {forecast.main.humidity}% | 💨 {forecast.wind.speed} m/s
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;
