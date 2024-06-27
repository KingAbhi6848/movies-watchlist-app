import MovieCard from './MovieCard';

const MovieList = ({ movies, removeMovie, toggleWatched ,getReviewId}) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {movies.map((movie, index) => (
        <div className="col" key={index}>
          <MovieCard
            movie={movie}
            index={movie.id}
            removeMovie={removeMovie}
            toggleWatched={toggleWatched}
            getReviewId = {getReviewId}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
