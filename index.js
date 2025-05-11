import express from 'express'
import 'dotenv/config'
import connectDb from './config/connectDB.js'
import { fetchNotes , createNote, fetchNote, updateNote, deleteNote } from './controllers/notes.controller.js'

const app = express()
const PORT = process.env.PORT || 5001

connectDb()

app.use(express.json())



app.post('/post' , createNote)       // CREATE
app.get('/notes' ,fetchNotes)        // READ
app.get('/notes/:id', fetchNote)     // READ
app.put('/notes/:id' , updateNote)   // UPDATE
app.delete('/notes/:id',deleteNote)  // DELETE



app.listen(PORT, ()=>{
    try {
        console.log(`Server listening on PORT ${PORT}` )
    } catch (error) {
        console.log(`Error connecting to Server ${error}`)
    }
})
