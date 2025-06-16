import mongoose from "mongoose";
import { MONGO_URI } from "./env";


mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI as string);
    console.log("mongodb connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
export default connectDB;

