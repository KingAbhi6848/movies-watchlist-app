import express from 'express';
import dotenv from 'dotenv';
import movieRoute from './src/movie.routes.js';
import mongoDb from './config/mongoose.config.js';


dotenv.config();
const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.use('/',movieRoute);




app.listen(port,(err)=>{
  if(err){
    console.log("Express Server not started",err);
  }

  console.log("Server is running successfully on port",port);
  mongoDb();
})