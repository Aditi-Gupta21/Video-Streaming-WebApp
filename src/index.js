import dotenv from "dotenv";
import connectDB  from "./db/db.js";

dotenv.config();

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Server is running at port : ${process.env.PORT}`)
  })
})
.catch((error)=>{
  console.log("MongoDB connection failed !!! ", error)
});







































 
// import express from "express";
// const app = express();

// (async ()=>{
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) =>{
//       console.log("ERR: ", error);
//       throw err;
//     })

//     app.listen(process.env.PORT,()=>{
//       console.log(`App listening on port ${process.env.PORT}`);
//     })
//   } catch (error) {
//     console.error("Error: ", error);
//     throw err;
//   }
// })();