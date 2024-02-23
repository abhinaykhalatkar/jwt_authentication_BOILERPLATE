import mongoose from "mongoose";

const connectUserDB = async () => {
  console.log(` connectin gto ${process.env.MONGODB_URI}`);
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || "");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Errorr: ${error.message}`);
    process.exit(1);
  }
};

export default connectUserDB;
