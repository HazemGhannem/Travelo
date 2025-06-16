import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("mongodb connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
export default connectDB;

