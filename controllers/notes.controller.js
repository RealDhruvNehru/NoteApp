import Notes from "../models/note.js"

export const createNote =  async(req,res)=>{
    const {title , body} = req.body

     const note = await Notes.create({
        title : title , 
        body : body
     })
     res.status(200).json({message : "Note Created Successfully" , Note : note})
}
export const fetchNotes = async (req,res)=> {
    const notes  = await Notes.find()
    res.status(201).json({Notes  : notes})

}
export const fetchNote = async(req,res)=> {
    const noteId=(req.params.id)
    const note = await Notes.findById(noteId)
    res.status(201).json({Note : note})
}
export const updateNote = async(req,res)=> {
     try {
         const noteId = req.params.id 
    const {title , body} = req.body
      await Notes.findByIdAndUpdate(noteId, {
        title : title , 
        body : body,
    }) 
      const note = await Notes.findById(noteId)
    res.status(201).json({message : "Note Updated Successfully" , note : note})
     } catch (error) {
        res.status(500).json({error : "Error in update handler "})
        throw error
     }
     
}
export const deleteNote = async (req,res)=>{
    const noteId = req.params.id
    await Notes.deleteOne({_id:noteId})
    res.status(200).json({success : "Note Deleted"})
}