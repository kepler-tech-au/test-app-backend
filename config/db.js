import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const DBURI = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.DBURL}/`;

// Mongoose Connection
const connectDB = async () => {
  try {
    await mongoose.connect(DBURI);
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};

export default connectDB;
