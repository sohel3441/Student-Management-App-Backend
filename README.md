# Student Management Backend

This is the backend API for the Student Management Application. It is built with Node.js, Express, and MongoDB using Mongoose for data modeling. It provides RESTful routes for creating, updating, deleting, and viewing student records.


## Tech Stack
- Node.js
- Express
- MongoDB (with Mongoose)


## API Endpoints

| Method | Endpoint           | Description            |
|--------|--------------------|------------------------|
| POST   | /students          | Create a new student   |
| GET    | /students          | Get all students       |
| PUT    | /students/:id      | Update a student       |
| DELETE | /students/:id      | Delete a student       |



## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/sohel3441/Student-Management-App-Backend.git

cd student-management-backend

## Install Dependencies
npm install


##  Add Environment Variables
PORT=3000
MONGODB_URI=mongodb+srv://shaikhsohel113441:kXtdrAk96J1FzeRD@student-management-clus.6kyc3tb.mongodb.net/?retryWrites=true&w=majority&appName=Student-Management-Cluster

## Start the Server
npm start

## Server will be running at
http://localhost:3000
