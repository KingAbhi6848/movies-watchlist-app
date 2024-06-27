
const MovieCard = ({ movie, index, removeMovie, toggleWatched ,getReviewId}) => {
  return (
    <div className="card">
      <div className="card-body">
        
        <button type="button" className="btn-close float-end" aria-label="Close" onClick={() => removeMovie(index)}></button>
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.description}</p>
        <p className="card-text"><small className="text-muted">Year: {movie.year}</small></p>
        <p className="card-text"><small className="text-muted">Genre: {movie.genre}</small></p>
        <button type="button" className={`btn ${movie.watched ? 'btn-warning' : 'btn-secondary'} me-2`} onClick={() => toggleWatched(index)}>
          {movie.watched ? 'Watched' : 'Unwatched'}
        </button>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={()=> getReviewId(index)} data-bs-target="#addReviewModal">
          Add Review
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
