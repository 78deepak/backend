import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try{
       const connectionInstance =  await mongoose.connect(`${process.env.MONGOODB_URL}/${DB_NAME}`)
       console.log(`\n MongoDb connected !! DB HOST:${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("MONGODB connection faield",error);
        process.exit(1)
      }
}

export default connectDB




// database se connect krne ke liye hme 2 chijo ka hamesha dyan rakhna he 1st kyoki isme time lgta he to hme async function jriri he
// 2nd hme try or catch block ka use to krna hi pdega