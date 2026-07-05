import express from 'express'
import usercontroller from '../controller/usercontroller.js'
import User from '../models/User.js'
const router = express.Router()
router.post('/add-user', usercontroller.createUser)
router.get('/users', usercontroller.getUsers)
router.get('/users/:id', usercontroller.getUser)

export default router