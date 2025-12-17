# Task Manager – MERN Stack

A simple Task Manager web application built using the MERN stack that allows users to add, view, and delete tasks.
The application is fully deployed and functional using modern deployment platforms.

# Live Demo

Frontend (Vercel):https://task-manager-23adqaqc1-sri-charans-projects-775b067f.vercel.app/


Backend API (Render):https://task-manager-3r80.onrender.com/

GitHub Repository:https://github.com/SriCharan55/Task-Manager

# Tech Stack
# Frontend

React (Vite)

Tailwind CSS

Axios

Functional components & React Hooks

# Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

CORS

dotenv

# Deployment

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

## Features

Add a new task

View all tasks

Delete a task

Input validation

Loading and error states

Clean and responsive UI

Fully deployed and accessible via live URLs
## Backend API Endpoints
Base URL
(https://task-manager-3r80.onrender.com/)

Endpoints
Method	Endpoint	Description
GET	/api/tasks	Fetch all tasks
POST	/api/tasks	Add a new task
DELETE	/api/tasks/:id	Delete a task by ID
Root Endpoint (Health Check)
GET /


Returns:

{
  "message": "Task Manager Backend API is running",
  "endpoints": {
    "getTasks": "GET /api/tasks",
    "addTask": "POST /api/tasks",
    "deleteTask": "DELETE /api/tasks/:id"
  }
}

🧩 Task Schema (MongoDB)
{
  title: String,      // required
  createdAt: Date     // auto-generated
}

⚙️ Setup Instructions (Local)
## 1) Clone Repository
git clone <YOUR_GITHUB_REPO_URL>
cd task-manager

## 2) Backend Setup
cd backend
npm install


Create a .env file:

MONGO_URI=your_mongodb_connection_string
PORT=5000


Run backend:

npm start

## 3) Frontend Setup
cd frontend/task
npm install
npm run dev

##  Deployment Details
##  Backend (Render)

Deployed as a Node Web Service

Environment variables configured using Render dashboard

MongoDB Atlas used as cloud database

Handles cold starts on free tier gracefully

##  Frontend (Vercel)

Deployed from GitHub repository

Connected to live backend API

Fully responsive and accessible on all devices

 ## Bonus Features Implemented

 Input validation

 Loading & error states

 Clean commit history

 UI improvements with Tailwind CSS

 Proper API documentation & health endpoint
