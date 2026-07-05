import express from 'express'
import coursecontroller from '../controller/coursecontroller.js'
import Course from '../models/Course.js'

const router = express.Router();
router.post('/add-course', coursecontroller.createCourse)
router.get('/courses',coursecontroller.getCourses)
router.get('/employees/:id', coursecontroller.getCourse)
router.delete('/del-course/:id',coursecontroller.deleteCourse)
export default router