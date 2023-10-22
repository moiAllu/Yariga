import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    mongoose.set("strictQuery", true);
    const connectToDb = await mongoose.connect(url);
    if (connectToDb) {
      console.log("Connected to MongoDB");
    }
  } catch (e) {
    console.log(e);
  }
};
export default connectDB;
