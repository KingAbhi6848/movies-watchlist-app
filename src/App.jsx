import { useSelector, useDispatch } from 'react-redux';
import { addMovie,deleteMovie,toggleWatched,addReview } from './redux/watchSlice';
import MovieList from './components/MovieList';
import AddMovieForm from './components/AddMovieForm';
import AddReviewForm from './components/AddReviewForm';


function App() {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.watchlist.movies);

  const handleAddMovie = (newMovie) => {
   
    dispatch(addMovie(newMovie));
  };

  const handleRemoveMovie = (id) => {
     console.log('entered');
    dispatch(deleteMovie({ id }));
  };

  const handleToggleWatched = (id) => {
    dispatch(toggleWatched({ id }));
  };

  const getReviewId = (id)=>{
    console.log(id);
    return id;
  }
  const handleAddReview = (newReview) => {
   const id = getReviewId();
   const newReview1 = {...newReview,id};
   
    dispatch(addReview(newReview1));
  };
  

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{fontWeight:'700',color:'red', border:'2px solid red' , backgroundColor:'yellow', padding:'5px', borderRadius:'5px'}}>MOVIES WATCHLIST</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto"></ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" style={{fontFamily:'monospace',fontWeight:'700'}} href="#" data-bs-toggle="modal" data-bs-target="#addMovieModal">Add</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{fontFamily:'monospace' , fontWeight:'700'}} href="#">Watchlist</a>
              </li>
           
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <p className="text-muted" style={{marginLeft:'40%'}}>{movies.length === 0 ? 'No movies added.' : null}</p> 
        
        <MovieList movies={movies} removeMovie={handleRemoveMovie} toggleWatched={handleToggleWatched} getReviewId={getReviewId} />
        <AddMovieForm addMovie={handleAddMovie} />
        <AddReviewForm addReview={handleAddReview} />
      </div>
    </div>
  );
}

export default App;
