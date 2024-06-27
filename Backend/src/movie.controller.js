import MovieRepository from "./movie.repository.js";

export default class MovieController{
   
  constructor(){
    this.repository = new MovieRepository();
  }

  async addMovie(req,res){
    try {
      const {title,desc,year,genre} = req.body;
      
      const newMovie = await this.repository.add(title,desc,year,genre);
      if(!newMovie){
        return res.status(500).send("Something went Wrong while save movie");
      }

      return res.status(201).send(newMovie);
      
    } catch (error) {
       res.status(500).send(error.message);
      console.log(error)
    }
  }
async editMovie(req,res){
  try {
    const id = req.params.id;
    const movie = await this.repository.edit(id,req.body);
    res.status(200).send(movie);
  } catch (error) {

   return res.status(500).send("Error in updating the movie");    
  }
}

async deleteMovie(req, res) {
  try {
    const id = req.params.id;
    const result = await this.repository.delete(id);

    if (result.error) {
      return res.status(404).json({ message: "Movie not found", error: result.error });
    }

    return res.status(200).json({ message: "Movie deleted successfully", movie: result.movie });
  } catch (error) {
    console.error("Error deleting movie:", error);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }


}

async rateMovie(req,res){
  try {
    const { id } = req.params;
    const { rate } = req.body;

    const result = await this.repository.rate(id, rate);

    if (result.error) {
      return res.status(404).json({ message: "Movie not found", error: result.error });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error("Error rating movie:", error);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
}
}