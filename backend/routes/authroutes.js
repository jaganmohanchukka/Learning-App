import express from 'express'
import authcontroller from '../controller/authcontroller.js'
import User from '../models/User.js'

const router = express.Router()
router.post('/add-user', authcontroller.createUser)
router.post('/login', authcontroller.loginUser)


export default router