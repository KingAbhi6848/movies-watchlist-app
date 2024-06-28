import mongoose from "mongoose";
import movieSchema from "./movie.model.js";

const MovieModel = mongoose.model('Movie',movieSchema);

export default class MovieRepository{

  async add(title,desc,year,genre){
           try {
            const newMovie = new MovieModel({title,desc,year,genre});
            console.log(title);
            await newMovie.save();
            return newMovie;
           } catch (error) {
            console.log(error);
            throw new Error("Error While Creating New Movie",error.message);
           }
  }

  async edit(id,{ title, desc, year, genre}) {
    try {
      const updatedMovie = await MovieModel.findByIdAndUpdate(
        id,
        { title, desc, year, genre },
        { new: true } 
      );
  
      if (!updatedMovie) {
        return { message: "No Movie Found" };
      }
  
      return { message: "Movie updated successfully", movie: updatedMovie };
    } catch (error) {
      return { message: "Error updating movie", error: error.message };
    }
  }

  async delete(id) {
    try {
      const deletedMovie = await MovieModel.findByIdAndDelete(id);
  
      if (!deletedMovie) {
        return { message: "No Movie Found" ,error:"No movie found"};
      }
  
      return { message: "Movie deleted successfully", movie: deletedMovie };
    } catch (error) {
      return { message: "Error deleting movie", error: error.message };
    }

}

async rate(id, rating) {
  try {
    const updatedMovie = await MovieModel.findByIdAndUpdate(
      id,
      { rating: rating },
      { new: true } 
    );

    if (!updatedMovie) {
      return { message: "No Movie Found" ,error:"Not Exist"};
    }

    return { message: "Movie rated successfully", movie: updatedMovie };
  } catch (error) {
    return { message: "Error rating movie", error: error.message };
  }
}

async getAll(){
  const movies = await MovieModel.find({});
  return movies;
}


}