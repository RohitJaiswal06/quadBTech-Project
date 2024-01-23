import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
const GetShows = () => {
    
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data));
  }, []);

 

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Show List</h1>
      <ul className='lists'>
        {shows.map(show => (
          <li key={show.show.id}>
            <img src={show.show.image? show.show.image.medium : "https://www.thecabinsingapore.com.sg/wp-content/uploads/2014/11/no-preview.jpg"} alt='no preview'></img>
            <h3>{show.show.name}</h3>
            <p>Language : {show.show.language}</p>
            <p>Rating : {show.show.rating.average}</p>
            <Link to={`/shows/${show.show.id}`}><button>Get Details</button></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetShows;

