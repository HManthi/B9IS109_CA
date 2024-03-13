import express from 'express'
import { Student } from '../models/Student.js';
import bcrypt from 'bcrypt'
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const {username, password, roll, grade} = req.body;
        const student  = Student.findOne({username})

        if(student){
            return res.json({message: "Student is registered"})
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newStudent = new Student({
            username,
            password: hashPassword,
            roll: roll,
            grade
        })

        await newStudent.save()
        return res.json({registered: true})
    } catch (err) {
        return res.json({message: "Error in registring student"})
    }
})

export {router as studentRouter}