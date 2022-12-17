import React, {useState, useEffect} from "react";


const MovieComponent = () => {
    const [movieData, setmovieData] = useState([])

    useEffect(()=> {
        const url = "http://localhost:5001/api/showInfos?pagesize=10";

        const fetchData = async() => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setmovieData(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    },[]);
    
    return (
        <div className="movie-container">
          {movieData.map((movie) => (
            <div className="movie" key={movie.id}>
              <img src={movie.poster} alt={`Poster for ${movie.title}`} />
              <div className="movie-title">{movie.primaryTitle}</div>
            </div>
          ))}
        </div>
      );
    };
  
  
  
  export default MovieComponent;