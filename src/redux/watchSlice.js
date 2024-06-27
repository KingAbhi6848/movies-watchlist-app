import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
};

const watchlistSlice = createSlice({
    name: 'watchlist',
    initialState,
    reducers: {
        addMovie: (state, action) => {
            state.movies.push({
                id: nanoid(),
                title: action.payload.title,
                description: action.payload.description,
                year: action.payload.year,
                genre: action.payload.genre,
                watched: false,
                reviews: {
                    rating:0,
                    reviewText:'Write you review'
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
            const movie = state.movies.find(movie => movie.id === action.payload.id);
            console.log(action.payload);
            console.log(movie);
            if (movie) {
                movie.reviews.push({
                    rating: action.payload.rating,
                    reviewText: action.payload.reviewText,
                });
            }
            
        },
    },
});

export const { addMovie, deleteMovie, toggleWatched, addReview } = watchlistSlice.actions;

export default watchlistSlice.reducer;
