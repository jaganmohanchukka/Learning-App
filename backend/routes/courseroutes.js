import express from 'express'
import coursecontroller from '../controller/coursecontroller.js'
import Course from '../models/Course.js'

const router = express.Router();
router.post('/add-cor', coursecontroller.createCourse)
router.get('/courses',coursecontroller.getCourse)
export default router