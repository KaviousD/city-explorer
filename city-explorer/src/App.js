import logo from './logo.svg';
import './App.css';
import ButtonForm from './Button';
import Weather from './Weather';
import React, { useEffect, useState } from 'react';


// const App = () => {
//   const [forecastData, setForecastData] = useState([]);

//   useEffect(() => {
//     // Make a request to the server to get forecast data

//     const ForecastData = fetch () => {
//       try {
//         const response = await fetch('/api/forecast');
//         const data = await response.json();
//         setForecastData(data);
//       } catch (error) {
//         console.error('Error fetching forecast data:', error);
//       }
//     };

//     ForecastData();

//   // }
function App() {
  const [WeatherData, setWeatherData] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonForm setWeatherData={setWeatherData} />

        <Weather WeatherData={WeatherData} />
        <p>Loading forecast data...</p>

      </header>
    </div>
  );
}

export default App;
