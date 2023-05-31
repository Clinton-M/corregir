import mongoose from "mongoose";

// const dbConnect = () => {
//   if (mongoose.connection.readyState >= 1) {
//     return;
//   }

//   mongoose.set("strictQuery", false);
//   mongoose.connect(process.env.MONGO_URI);
//   console.log("Connected to MongoDB");
// };

// export default dbConnect; // thi not use asyn await

const connectDB = async () => {
  
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      //   useUnifiedTopology: true,
      //   useNewUrlParser: true,
      //   useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}


export default connectDB;