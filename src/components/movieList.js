import React from 'react';
const MovieList = (props)=>{

    console.log("Movie List Component", props);
    return (
        <>
        {
            props.movies.map((movie,i) => (
                <div kay={i} className="image-container d-flex justify-content-start m-3">
                    <img src={movie.Poster} alt="Movie poster"></img>
                </div>
            ))
        }
        </>
    )
}
export default MovieList;