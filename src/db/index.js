import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
       console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host} \n`);
    } catch (error) {
        console.log("MONGOODB CONNECTION ERROR ",error);
        process.exit(1); 
    }
}

export default connectDB