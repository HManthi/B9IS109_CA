import  express  from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { AdminRouter } from './routes/auth.js'
import { studentRouter } from './routes/student.js'
import {bookRouter} from './routes/book.js'
import { Book } from './models/Book.js'
import { Student } from './models/Student.js'
import { Admin } from './models/Admin.js'

import './db.js'

const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
  }))
app.use(cookieParser())
dotenv.config()
app.use('/auth', AdminRouter)
app.use('/student', studentRouter)
app.use('/book', bookRouter)

app.get('/dashboard', async(req, res) => {
  try {
    const student = await Student.countDocuments()
    const admin = await Admin.countDocuments()
    const book = await Book.countDocuments()
    return res.json({ok: true, student, admin, book})
  } catch (err) {
    return res.json(err)
  }
})

app.get('/', (req, res) => {
  return res.json("Server Start")
})

app.listen(process.env.PORT, () => {
    console.log('server is running');
})