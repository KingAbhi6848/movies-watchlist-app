import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, 
  },
  desc: {
    type: String,
    trim: true,
  },
  year: {
    type: Number,
    min: 1888, 
    max: new Date().getFullYear(), 
  },
  genre: {
    type: String,
    trim: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,

  }
},{
  timestamps:true
});


export default movieSchema;
