import react, { useState, useEffect } from 'react';
import axios from 'axios';


const Movie = () => {
    const [Movies, setMovies] = useState([]);



    const fetchMovies = async () => {
        try {
            const response = await axios.get("https://localhost:3001/movies?movie=Memphis");
            setMovies(response.data);
        } catch (error) {
            console.log(error);
        }
    }


}

    export default Movie;
