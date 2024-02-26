import mongoose from "mongoose";

const connectUserDB = async () => {
  const dbUrl: any = process.env.MONGODB_URI;
  try {
    const conn = await mongoose.connect(dbUrl);
    console.log(`MongoDB Connected: ${dbUrl}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectUserDB;
