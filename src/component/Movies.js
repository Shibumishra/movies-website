import React from 'react';

const Movies = ({Poster, Title, Type, Year, imdbID}) => {
    console.log(Title)
    return ( <div key={imdbID}>
         <img src={Poster} alt={Title} />
         <h1>{Title}</h1>
    </div> );
}
 
export default Movies;