import Student from '../models/Student.js';

// Create a new student
export const createStudent = async (req, res) => {
  try {
    const { name, age, course, email } = req.body;

    if (!name || !age || !course || !email) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const studentExists = await Student.findOne({ email });
    if (studentExists) {
      return res.status(409).json({ message: 'Student with this email already exists.' });
    }

    const student = new Student({ name, age, course, email });
    const savedStudent = await student.save();

    res.status(201).json(savedStudent);
  } catch (err) {
    console.error('Error creating student:', err);
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

// Get all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json(students);
  } catch (err) {
    console.error('Error fetching students:', err);
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

//  Update student by ID
export const updateStudent = async (req, res) => {
  try {
    const { name, age, course, email } = req.body;

    const updated = await Student.findByIdAndUpdate(
      req.params.id,
      { name, age, course, email },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Student not found.' });
    }

    res.json(updated);
  } catch (err) {
    console.error('Error updating student:', err);
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

// Delete student by ID
export const deleteStudent = async (req, res) => {
  try {
    const deleted = await Student.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: 'Student not found.' });
    }

    res.json({ message: 'Student deleted successfully.' });
  } catch (err) {
    console.error('Error deleting student:', err);
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};
