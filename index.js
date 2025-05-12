import express from 'express'
import 'dotenv/config'
import connectDb from './config/connectDB.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import notesRouter from './routes/notes.route.js'
import userRouter from './routes/users.route.js'
import authorize from './middleware/authorise.js'


const app = express()
const PORT = process.env.PORT || 5001

connectDb()

app.use(express.json())
app.use(cors({
    origin : true , 
    credentials : true,
}))
app.use(cookieParser())


app.use('/api/users', authorize, userRouter)
app.use('/api/notes' , notesRouter)






app.listen(PORT, ()=>{
    try {
        console.log(`Server listening on PORT ${PORT}` )
    } catch (error) {
        console.log(`Error connecting to Server ${error}`)
    }
})
