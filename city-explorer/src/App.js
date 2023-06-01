import logo from './logo.svg';
import './App.css';
import ButtonForm from './Button';
import Weather from './Weather';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie.js';

function App() {
  const [WeatherData, setWeatherData] = useState([]);
  const [Movies, setMovies] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="buttonData">
          <ButtonForm MoviesData={Movies} setWeatherData={setWeatherData} setMovies={setMovies} />
        </div>
        <div className="movieData">
          {/* <Movie MovieData={Movies} /> */}
        </div>
        <div className="WeatherData">
          <Weather WeatherData={WeatherData} />
        </div>
      </header>
    </div>
  );
}

export default App;

