import express from 'express';
import MovieController from './movie.controller.js';

const movieRoute  = express.Router();
const movieController = new MovieController();

movieRoute.post('/',movieController.addMovie.bind(movieController));
movieRoute.put('/rate/:id',movieController.rateMovie.bind(movieController));
movieRoute.put('/:id',movieController.editMovie.bind(movieController));
movieRoute.delete('/:id',movieController.deleteMovie.bind(movieController));
movieRoute.get('/',movieController.getAllMovies.bind(movieController));



export default movieRoute;