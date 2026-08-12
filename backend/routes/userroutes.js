import express from 'express'
import usercontroller from '../controller/usercontroller.js'
import User from '../models/User.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()
router.get('/users', usercontroller.getUsers)
router.get('/user',protect, usercontroller.getMe)
router.get('/enrolled',protect,usercontroller.getEnrolledCourses)
router.post('/enroll',protect,usercontroller.addEnrolledCourses)


export default router