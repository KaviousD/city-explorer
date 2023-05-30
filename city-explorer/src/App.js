import logo from './logo.svg';
import './App.css';
import ButtonForm from './Button';
import Weather from './Weather';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie.js';


function App() {
  const [WeatherData, setWeatherData] = useState([]);
  

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ButtonForm setWeatherData={setWeatherData} />
        </div>
        <Movie  />
        <div>
          <Weather WeatherData={WeatherData} />
        </div>
      </header>
    </div>
  );
}



export default App;
