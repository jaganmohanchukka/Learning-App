import express from 'express'
import employeecontroller from '../controller/employeecontroller.js'
import Employee from '../models/Employee.js'
const router = express.Router()
router.post('/add-emp', employeecontroller.createEmployee)
router.get('/employees', employeecontroller.getEmployees)
router.get('/employees/:id', employeecontroller.getEmployee)

export default router