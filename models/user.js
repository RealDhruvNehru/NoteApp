import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
    email : {
        type : String ,
        required : true ,
        index : true ,
        lowerCase : true ,
        unique : true
    },
    password : {
        type : String ,
        required : true ,
    }
})

const Users = mongoose.model('Users' , userSchema)
export default Users