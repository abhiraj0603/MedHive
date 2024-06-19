import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName: "MedHive"
    }).then(()=>{
        console.log("Database Connected");
    }).catch((err)=>{
        console.log(`Error while connecting with database: ${err}`);
    });
};