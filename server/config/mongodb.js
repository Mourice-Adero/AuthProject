import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () =>
    console.log("Database connected successfuly")
  );
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}authprojectdb`);
  } catch (error) {
    console.log(`Connection Error: ${error}`);
  }
};

export default connectDB;
