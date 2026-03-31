# College Placement Management System

## Table of Contents
- [College Placement Management System](#college-placement-management-system)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Project Structure](#project-structure)
  - [User Roles](#user-roles)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Clone the Repository](#clone-the-repository)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
  - [Contributors](#contributors)

## Introduction
The **College Placement Management System** is a web application designed to streamline and digitize the placement process in colleges and universities. Developed by final year students of **Rizvi College of Engineering**, the system features a multi-role platform catering to students, TPO (Training and Placement Officer), management, and super admin. It aims to minimize manual efforts, improve transparency, and provide real-time tracking of the placement cycle.

## Core Roles and Workflows

- Student: sign up, login, complete profile, upload resume/offer letters, apply to jobs, track status, manage internships, read notices.
- TPO admin: post and manage jobs, review applicants, manage companies, view students by year/branch, send notices.
- Management admin: manage TPO users, approve students, post jobs, manage companies, send notices, monitor data.
- Superuser: manage management/TPO/student users and approve students.

## Architecture at a Glance

- Backend: Node.js + Express + MongoDB (Mongoose). JWT auth with a Bearer token.
- Frontend: Vite + React + React Router. Role-based routing and guarded pages.
- File handling: Multer upload middleware and Cloudinary for storage.
- Email: Nodemailer via Gmail SMTP.

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, Bootstrap
- Backend: Node.js, Express
- Database: MongoDB (Mongoose)
- Auth: JWT (Bearer tokens)
- File Storage: Cloudinary

## Project Structure

```plaintext
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── style
│   │   ├── utility
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Backend Details

### Express App

- Serves static files for profile images, resumes, and offer letters.
- Connects to MongoDB via Mongoose.
- Exposes role-based route groups: /user, /student, /tpo, /management, /admin, /company.
- Test route: /test returns "Working Fine!".

### Authentication

- JWT tokens are issued on login and stored per user.
- Auth middleware checks the Bearer token and validates it against the user record.

### Data Models (Mongoose)

- Users
  - Core profile: name, email, password, role, profile photo, address.
  - Student profile: roll number, UIN, department, year, GPA by semester, applied jobs, internships.
  - TPO/Management profile: position.
- Job
  - Title, description, eligibility, salary, deadline.
  - Company reference and applicant list with round status and offer letter.
- Company
  - Name, description, website, location, difficulty.
- Notice
  - Sender, receiver role, title, message, createdAt.

### Cascading Behaviors

- Deleting a job removes that job from all students' appliedJobs.
- Deleting a company deletes its jobs.
- Deleting a user removes them from job applicants and notices.

## Frontend Details

### Routing

- Public pages: landing page, login/signup per role.
- Protected routes are gated by role and profile completion status.
- Layout includes Navbar, Sidebar, Breadcrumb, and Footer.

### Role-Specific Areas

- Student
  - Dashboard, account, job listings, job detail, applied jobs, profile, internships, notices.
- TPO admin
  - Dashboard, students, job postings, companies, notices, approvals.
- Management admin
  - Dashboard, TPO user management, student approvals, job postings, companies, notices.
- Superuser
  - User management across roles and student approvals.

## API Routes

All secured endpoints require an Authorization header:

```
Authorization: Bearer <token>
```

### /user

- GET /detail
- GET /all-users
- GET /:userId
- POST /upload-photo
- POST /update-profile
- POST /change-password

### /student

- POST /signup
- POST /login
- POST /upload-resume
- POST /upload-offer-letter
- POST /delete-offer-letter/:jobId/:studentId
- PUT /job/:jobId/:studentId
- GET /check-applied/:jobId/:studentId
- POST /update-status/:jobId/:studentId
- GET /internship
- POST /update-internship
- POST /delete-internship
- GET /all-students-data-year-and-branch
- GET /notify-interview-hired

### /tpo

- POST /login
- POST /post-job
- GET /jobs
- POST /delete-job
- GET /job/:jobId
- GET /job/applicants/:jobId
- GET /myjob/:studentId

### /management

- POST /login
- GET /tpo-users
- POST /deletetpo
- POST /addtpo
- POST /add-management
- POST /add-student
- POST /send-notice
- GET /get-all-notices
- GET /get-notice
- POST /delete-notice

### /admin

- POST /login
- GET /management-users
- POST /management-add-user
- POST /management-delete-user
- GET /tpo-users
- POST /tpo-add-user
- POST /tpo-delete-user
- GET /student-users
- POST /student-add-user
- POST /student-delete-user
- POST /student-approve

### /company

- GET /company-detail
- POST /add-company
- POST /update-company
- POST /delete-company
- GET /company-data

### /test

- GET /test

## Environment Variables

### Backend (.env)

```
PORT=4518
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
SMTP_USER=your_email
SMTP_PASS=your_email_app_password
```

### Frontend (.env)

```
VITE_BACKEND_URL=http://localhost:4518
```

## Local Setup

### Prerequisites

- Node.js 18+ and npm
- MongoDB (local or Atlas)
- Cloudinary account
- Gmail account with an app password for SMTP

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Scripts

### Backend

- npm start: start the API using nodemon

### Frontend

- npm run dev: start Vite dev server
- npm run build: production build
- npm run preview: preview the production build
- npm run lint: run ESLint

## Troubleshooting

- If `vite` is not recognized, run `npm install` in the frontend directory and retry.
- If login fails with "Session Expired", re-login to obtain a fresh JWT.

## Contributors

- Arman Sunasara
- Mohammad Varaliya
- Rushik
