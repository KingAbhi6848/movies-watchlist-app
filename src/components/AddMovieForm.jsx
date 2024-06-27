import  { useState } from 'react';

const AddMovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMovie = {
      title,
      description,
      year,
      genre,
      watched: false,
    };
    addMovie(newMovie);
    setTitle('');
    setDescription('');
    setYear('');
    setGenre('');
  };

  return (
    <div className="modal fade" id="addMovieModal" tabIndex="-1" aria-labelledby="addMovieModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addMovieModalLabel">Add a Movie to Watchlist</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="movieTitle" className="form-label">Title</label>
                <input type="text" className="form-control" id="movieTitle" placeholder="Enter movie title" value={title} onChange={(e) => setTitle(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="movieDescription" className="form-label">Description</label>
                <textarea className="form-control" id="movieDescription" rows="3" placeholder="Enter movie description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="movieYear" className="form-label">Year</label>
                <input type="number" className="form-control" id="movieYear" placeholder="Enter movie year" value={year} onChange={(e) => setYear(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="movieGenre" className="form-label">Genre</label>
                <input type="text" className="form-control" id="movieGenre" placeholder="Enter movie genre" value={genre} onChange={(e) => setGenre(e.target.value)} required />
              </div>
              <button type="submit" className="btn btn-primary">Add Movie</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovieForm;
