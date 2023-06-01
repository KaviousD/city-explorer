import React, { useState } from 'react';
import axios from 'axios';

const ButtonForm = (props) => {
    const [city, setCity] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [lat, setLat] = useState('');
    const [movies, setMovies] = useState([]);
    const [lon, setLon] = useState('');
    const [MapImageUrl, setMapImageURL] = useState('');

    const handleInputChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let userInput = event.target[0].value;
        let response = axios.get(`https://us1.locationiq.com/v1/search?key=pk.a783bdab5c698b1a8f6134eb0f7094d4&q=${userInput}&format=json`);

        response
            .then(function (res) {
                console.log(res.data[0])
                let cityData = res.data[0]
                setDisplayName(cityData.display_name)
                setLat(cityData.lat)
                setLon(cityData.lon)
                setMapImageURL(`https://maps.locationiq.com/v3/staticmap?center=${cityData.lat},${cityData.lon}&zoom=13&size=600x400&key=pk.a783bdab5c698b1a8f6134eb0f7094d4`);
            })
            .catch(function (error) {
                console.log("error something went wrong");
            });

        let weatherResponse = axios.get(`http://localhost:3001/weather?searchQuery=${userInput}`);
        weatherResponse.then(function (res) {
            console.log(res.data)
            props.setWeatherData(res.data);

        });

        let MovieResponse = axios.get(`http://localhost:3001/movies?movie=${userInput}`);
        MovieResponse.then(function (res) {
            console.log(res.data)
            setMovies(res.data);
            //MovieResponse(res.data)
        });

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleInputChange}
                    placeholder='Enter city name'
                />
                <button type='submit'>Submit</button>
            </form>
            <h1>{displayName}</h1>
            <h1><p>Latitude:</p>{lat}</h1>
            <h1><p>Longitude:</p>{lon}</h1>
            {MapImageUrl && <img src={MapImageUrl} alt={displayName} />}

            <div>
                <h3>MovieListing</h3>
                <ul>
                    {movies.map((movie, index) => (
                        <li key={index}>
                            <p>Movie Title: {movie.title}</p>
                            <p>Movie Overview: {movie.overview}</p>
                            
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ButtonForm;
