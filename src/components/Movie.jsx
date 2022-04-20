import React from "react";

function Movie(props) {
  const {
    Title: title,
    Year: year,
    Poster: poster,
    imdbID: id,
    Type: type,
  } = props;

  return (
    <div id={id} className='card movie'>
      <div className='card-image waves-effect waves-block waves-light'>
        {poster === "N/A" ? (
          <img
            className='activator'
            src={`https://via.placeholder.com/390x270?text=${title}`}
            alt=''
          />
        ) : (
          <img className='activator' src={poster} alt='' />
        )}
      </div>
      <div className='card-content'>
        <span className='card-title activator grey-text text-darken-4'>
          {title}
        </span>
        <p>
          {year} <span className='right'>{type}</span>
        </p>
      </div>
    </div>
  );
}

export { Movie };
