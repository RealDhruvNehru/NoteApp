import jwt from 'jsonwebtoken'
import Users from '../models/user.js'

const authorize = async (req ,res , next)=> {
   const token =  req.cookies.Authorization
   const decoded = jwt.verify(token , process.env.JWT_SECRET)

   const user = Users.findById(decoded.sub)
   if(!user) return res.sendStatus(400)

    req.user = user
    next()
}

export default authorize