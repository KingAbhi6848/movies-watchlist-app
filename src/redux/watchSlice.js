import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
};

const watchlistSlice = createSlice({
    name: 'watchlist',
    initialState,
    reducers: {
        addMovie: (state, action) => {
            const movieId = nanoid();
            state.movies.push({
                id: movieId,
                title: action.payload.title,
                description: action.payload.description,
                year: action.payload.year,
                genre: action.payload.genre,
                watched: false,
                reviews: {
                    id:movieId,
                    rating:0,
                    reviewText:"Write you review here"
                },
            });
        },
        deleteMovie: (state, action) => {
            state.movies = state.movies.filter(movie => movie.id !== action.payload.id);
            console.log(  action.payload.id );
        },
        toggleWatched: (state, action) => {
            const movie = state.movies.find(movie => movie.id === action.payload.id);

            if (movie) {
                movie.watched = !movie.watched;
            }
        },
        addReview: (state, action) => {
            const movie = state.movies.find(movie => movie.id === movie.reviews.id);

            if(movie){
                movie.reviews.rating = action.payload.rating,
                movie.reviews.reviewText = action.payload.reviewText
            }
            }
            
        },
    },
)

export const { addMovie, deleteMovie, toggleWatched, addReview } = watchlistSlice.actions;

export default watchlistSlice.reducer;
