import React, { useState } from 'react';
import axios from 'axios';

// making city input for button
const ButtonForm = () => {
    const [city, setCity] = useState('');
    const [displayName, setDisplayName] = useState('test');
    const [lat, setLat] = useState('11');
    const [lon, setLon] = useState('22');


    const handelInputChange = (event) => {
        setCity(event.target.value);
    };



    const handelSubmit = (event) => {
        event.preventDefault();
        // name for city goes here
        let UserInput = event.target[0].value
        console.log(UserInput)

        let response = axios.get(`https://us1.locationiq.com/v1/search?key=pk.a783bdab5c698b1a8f6134eb0f7094d4&q=${UserInput}&format=json`)
        response.then(function (res) {
            console.log(res.data[0])
            let cityData = res.data[0]
            setDisplayName(cityData.display_name)
            setLat(cityData.lat)
            setLon(cityData.lon)
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
        </div>
    )
}

export default ButtonForm;