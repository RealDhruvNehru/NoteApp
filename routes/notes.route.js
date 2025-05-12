import { Router } from 'express'
import { fetchNotes , createNote, fetchNote, updateNote, deleteNote } from '../controllers/notes.controller.js'
const notesRouter = Router()
// NOTES ROUTES
notesRouter.post('/post' , createNote)       // CREATE
notesRouter.get('/notes' ,fetchNotes)        // READ
notesRouter.get('/notes/:id', fetchNote)     // READ
notesRouter.put('/notes/:id' , updateNote)   // UPDATE
notesRouter.delete('/notes/:id',deleteNote)  // DELETE

export default notesRouter