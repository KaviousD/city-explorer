import React, { useState } from 'react';
import axios from 'axios';

// making city input for button
const ButtonForm = (props) => {
    const [city, setCity] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [MapImageUrl, setMapImageURL] = useState('')


    const handelInputChange = (event) => {
        setCity(event.target.value);
    };



    const handelSubmit = (event) => {
        event.preventDefault();
        // name for city goes here
        let UserInput = event.target[0].value;
        console.log(UserInput);
        // requesting to the lociq
        let response = axios.get(`https://us1.locationiq.com/v1/search?key=pk.a783bdab5c698b1a8f6134eb0f7094d4&q=${UserInput}&format=json`);

        response.then(function (res) {
            console.log(res.data[0])
            let cityData = res.data[0]
            setDisplayName(cityData.display_name)
            setLat(cityData.lat)
            setLon(cityData.lon)
            setMapImageURL(`https://maps.locationiq.com/v3/staticmap?center=${cityData.lat},${cityData.lon}&zoom=13&size=600x400&key=pk.a783bdab5c698b1a8f6134eb0f7094d4`);
        })
            .catch(function (error) {
                console.log("error somthing went wrong");
            });
        // the 
        let WeatherResponse = axios.get(`http://localhost:3001/weather?searchQuery=${UserInput}`)
        WeatherResponse.then(function (res) {
            console.log(res.data)
            props.setWeatherData(res.data)
        })

    };
    // change the location data to apply to diffrent cities

    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input
                    type="text"

                    onChange={handelInputChange}
                    placeholder='Enter city name'
                />
                <button type='submit'>submit</button>
            </form>
            <h1>{displayName}</h1>
            <h1>{lat}</h1>
            <h1>{lon}</h1>
            {MapImageUrl && <img src={MapImageUrl} alt={displayName} />}
        </div>
    )
}




export default ButtonForm;

