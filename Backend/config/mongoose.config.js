import mongoose from "mongoose";


const mongoDb = async()=>{
  try {

    await mongoose.connect('mongodb://localhost:27017/watchlist', {useNewUrlParser: true});  
    console.log("MongoDB Server Started Successfully")  ;
  } catch (error) {
    console.log('Error in connecting to mongodb',error);
  }
}

export default mongoDb;