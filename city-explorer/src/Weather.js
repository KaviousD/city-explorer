import React from 'react';

const Weather = ({ WeatherData }) => {
    return (
        <div>
            <h2>Weather Forecast</h2>
            <ul>
                {WeatherData.map((Weather, index) => (
                    <li key={index}>
                        <p>Date: {Weather.date}</p>
                        <p>Description: {Weather.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Weather;
