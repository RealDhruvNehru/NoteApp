import express from 'express'
import 'dotenv/config'
import connectDb from './config/connectDB.js'

const app = express()
const PORT = process.env.PORT || 5001

connectDb()

app.use(express.json())

app.get('/', (req,res)=>{
    res.json({message : "Welcome from server"})
})




app.listen(PORT, ()=>{
    try {
        console.log(`Server listening on PORT ${PORT}` )
    } catch (error) {
        console.log(`Error connecting to Server ${error}`)
    }
})
