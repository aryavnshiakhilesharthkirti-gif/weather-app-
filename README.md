# 🌤️ Weather App

A modern, responsive weather application built with React and powered by the OpenWeatherMap API.

## Features

✨ **Current Weather Display**
- Real-time temperature and weather conditions
- Feels-like temperature
- Humidity, wind speed, and visibility information
- Beautiful weather icons

📅 **5-Day Forecast**
- Detailed forecast for the next 5 days
- Temperature trends
- Weather conditions and descriptions
- Wind speed and humidity data

🔍 **City Search**
- Search weather for any city worldwide
- Real-time data fetching
- Error handling for invalid cities

🌓 **Dark/Light Theme**
- Toggle between dark and light modes
- Persistent theme preference

📱 **Responsive Design**
- Works seamlessly on desktop, tablet, and mobile devices
- Modern UI with Tailwind CSS
- Smooth animations and transitions

## Tech Stack

- **Frontend:** React 18
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **Icons:** React Icons
- **Weather Data:** OpenWeatherMap API

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aryavnshiakhilesharthkirti-gif/weather-app-.git
   cd weather-app-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get OpenWeatherMap API Key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate an API key from your account dashboard

4. **Configure API Key**
   - Open `src/App.js`
   - Replace `'your-openweathermap-api-key'` with your actual API key:
   ```javascript
   const API_KEY = 'your-actual-api-key-here';
   ```

5. **Start the application**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

## Usage

1. **Search for a City**
   - Enter a city name in the search bar
   - Click the search button or press Enter
   - View current weather and forecast

2. **Toggle Theme**
   - Click the sun/moon button in the top-right corner
   - Switch between dark and light themes

3. **View Weather Details**
   - Current temperature and description
   - Humidity, wind speed, and visibility
   - 5-day forecast with daily conditions

## Project Structure

```
weather-app/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/
│   │   ├── SearchBar.js    # Search functionality
│   │   ├── CurrentWeather.js # Current weather display
│   │   └── Forecast.js     # 5-day forecast
│   ├── App.js              # Main application component
│   ├── App.css             # App styles
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## Available Scripts

```bash
# Start development server
npm start

# Build for production
npm build

# Run tests
npm test

# Eject configuration (irreversible)
npm eject
```

## API Reference

### Current Weather
- **Endpoint:** `https://api.openweathermap.org/data/2.5/weather`
- **Parameters:** `q` (city name), `units` (metric), `appid` (API key)

### 5-Day Forecast
- **Endpoint:** `https://api.openweathermap.org/data/2.5/forecast`
- **Parameters:** `q` (city name), `units` (metric), `appid` (API key)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the MIT License.

## Contact & Support

- **GitHub:** [aryavnshiakhilesharthkirti-gif](https://github.com/aryavnshiakhilesharthkirti-gif)
- For issues and feature requests, please open an issue on GitHub

## Future Enhancements

- 🗺️ Interactive weather map
- 📍 Geolocation-based weather
- ⭐ Favorite cities/bookmarks
- 📊 Historical weather data
- 🔔 Weather alerts and notifications
- 🌍 Multiple language support

---

**Made with ❤️ for weather lovers**
