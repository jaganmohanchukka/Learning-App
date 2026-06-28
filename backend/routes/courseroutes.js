import express from 'express'
import coursecontroller from '../controller/coursecontroller.js'
import Course from '../models/course.js'

const router = express.Router();
router.post('/add-cor', coursecontroller.createCourse)
router.get('/course',coursecontroller.getCourse)
export default router