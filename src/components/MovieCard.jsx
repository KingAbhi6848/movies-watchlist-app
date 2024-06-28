import React from 'react';

const MovieCard = ({ movie, removeMovie, toggleWatched }) => {
  return (
    <div className="card mb-4 shadow-sm" style={{ position: 'relative' }}>
      <div className="card-body">
        <button 
          type="button" 
          className="btn-close float-end" 
          aria-label="Close" 
          onClick={() => removeMovie(movie.id)}
        ></button>
        
        <h5 className="card-title text-primary">{movie.title}</h5>
        
        <p className="card-text">{movie.description}</p>
        
        <p className="card-text"><small className="text-muted">Year: {movie.year}</small></p>
        
        <p className="card-text"><small className="text-muted">Genre: {movie.genre}</small></p>

        <button 
          type="button" 
          className={`btn ${movie.watched ? 'btn-warning' : 'btn-secondary'} me-2`} 
          onClick={() => toggleWatched(movie.id)}
        >
          {movie.watched ? 'Watched' : 'Unwatched'}
        </button>

        <button 
          type="button" 
          className="btn btn-primary" 
          data-bs-toggle="modal" 
          data-bs-target="#addReviewModal"
        >
         
          Add Review
        </button>
        
        {/* Review and Rating Section */}
        <div className="bg-light p-2 rounded mt-3" style={{ position: 'absolute', bottom: '10px', right: '10px', width: '180px' }}>
          {/* Display Rating if available */}
          {movie.reviews?.rating &&
            <p className="card-text mb-1">
              <small className="text-muted">
                <strong>Rating:</strong> {movie.reviews.rating}
              </small>
            </p>
          }
          
          {movie.reviews?.reviewText &&
            <p className="card-text mb-0">
              <small className="text-muted">
                <strong>Review:</strong> {movie.reviews.reviewText}
              </small>
            </p>
          }
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
