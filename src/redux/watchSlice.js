import { createSlice, nanoid } from "@reduxjs/toolkit";

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('watchlist', serializedState);
    } catch (e) {
        console.error("Could not save state", e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('watchlist');
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (e) {
        console.error("Could not load state", e);
        return undefined;
    }
};

const initialState = loadFromLocalStorage() || {
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
                    id: movieId,
                    rating: 0,
                    reviewText: "Write your review here"
                },
            });
            saveToLocalStorage(state);
        },
        deleteMovie: (state, action) => {
            state.movies = state.movies.filter(movie => movie.id !== action.payload.id);
            saveToLocalStorage(state);
        },
        toggleWatched: (state, action) => {
            const movie = state.movies.find(movie => movie.id === action.payload.id);
            if (movie) {
                movie.watched = !movie.watched;
            }
            saveToLocalStorage(state);
        },
        addReview: (state, action) => {
            const movie = state.movies.find(movie => movie.id === movie.reviews.id);
            if (movie) {
                movie.reviews.rating = action.payload.rating;
                movie.reviews.reviewText = action.payload.reviewText;
            }
            saveToLocalStorage(state);
        },
    },
});

export const { addMovie, deleteMovie, toggleWatched, addReview } = watchlistSlice.actions;

export default watchlistSlice.reducer;
