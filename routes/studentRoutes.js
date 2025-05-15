import express from 'express';
import {
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent
} from '../controllers/studentController.js';

const studentRouter = express.Router();

studentRouter.post('/students', createStudent);
studentRouter.get('/students', getAllStudents);          // Optional but helpful
studentRouter.put('/students/:id', updateStudent);
studentRouter.delete('/students/:id', deleteStudent);

export default studentRouter;
