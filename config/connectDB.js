import mongoose, { mongo } from "mongoose";

const connectDb = async(req,res)=> {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Database connected Successfully ${conn.connection.host}`)
        
    } catch (error) {
        console.log(`Error connecting to database ${error}`)
    }

}

export default connectDb ;