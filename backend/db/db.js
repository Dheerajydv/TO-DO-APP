import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log(`Connected to MongoDB sucessfully`);
    })
    .catch((err) => {
      console.error("Some error occured while connecting to MongoDB", err);
    });
};

export default connectToDatabase;
