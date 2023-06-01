import react, { useState, useEffect } from 'react';
import axios from 'axios';



const Movie = () => {
    const [Movies, setMovies] = useState([]);
    


// add memphis as a search parameter then link it to web page

return (
    <div className='MoviesCon'>
    <h3>{Movies[0]}</h3>
    <p>Title: {Movie.overview}</p>
    <p>Overview: {Movie.Title}</p>
    </div>
    

)

}

    export default Movie;
