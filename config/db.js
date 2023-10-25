import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      //must add in order to not get any error masseges:
      useNewUrlParser: true,
    });
    console.log(`connected to Mongo DB ${conn.connection.host}`.bgYellow);
  } catch (error) {
    console.log(`Error in Mongo DB ${error}`.bgRed.white);
  }
};

export default connectDB;
