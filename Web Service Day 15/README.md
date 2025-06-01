
# University Course Management API

This is a Node.js REST API for managing university-related data including courses, degrees, and students. The API uses Express.js as the web framework and MongoDB with Mongoose for data modeling.

## Project Structure

- **models/**
  - `Course.js` — Defines the course schema and model.
  - `Degree.js` — Defines the degree schema and model.
  - `Student.js` — Defines the student schema and model with references to degrees and courses.

- **routes/**
  - `courseRoute.js` — REST endpoints to get all courses and create a new course.
  - `degreeRoute.js` — REST endpoints to get degrees and query by ID or code.
  - `studentRoute.js` — REST endpoints to get students, including populated degree and enrolled courses info.

- **index.js** — Main entry point. Sets up Express server, connects to MongoDB, and mounts routes.

---

## Setup Instructions

1. **Install dependencies:**

   ```bash
   npm install express mongoose
   npm init
   ```

2. **Run MongoDB:**

   Make sure MongoDB is running locally on `mongodb://localhost:27017`.

3. **Start the server:**

   ```bash
   node index.js
   ```

4. **Access the API endpoints:**

   - Courses: `GET /Course`, `POST /Course`
   - Degrees: `GET /Degree`, `GET /Degree/:id`, `GET /Degree/:code/:cid`
   - Students: `GET /Student`, `GET /Student/course`, `GET /Student/:id`, `GET /Student/:code/:cid`

---

## Model Details

### Course Model (`models/Course.js`)

- Fields: `code` (String), `name` (String), `credits` (Number), `description` (String)
- Example data: 
  - IT2234 - Practical for web services (3 credits)
  - IT2214 - Practical for operating systems (4 credits)

### Degree Model (`models/Degree.js`)

- Fields: `_id` (String), `name` (String), `credits` (Number), `duration` (Number, in years), `faculty` (String)
- Example data:
  - FAS2000ICT - Bachelor of Information Technology, 120 credits, 3 years, Faculty of Applied Science

### Student Model (`models/Student.js`)

- Fields: `_id` (String), `name` (String), `date_of_birth` (Date), `gender` (String), `degreeId` (ref to Degree), `enroled_courses` (array of refs to Course)
- Example data:
  - Student ID: 2021ict01, Name: Peter Kolins, Degree ID: FASFAS2000ICT

---

## API Endpoints

### Courses

- `GET /Course` — Get all courses
- `POST /Course` — Add a new course

### Degrees

- `GET /Degree` — Get all degrees
- `GET /Degree/:id` — Get degree by ID
- `GET /Degree/:code/:cid` — Query degree by code (custom route, requires code and cid params)

### Students

- `GET /Student` — Get all students
- `GET /Student/course` — Get students with populated degree and enrolled courses
- `GET /Student/:id` — Get student by ID
- `GET /Student/:code/:cid` — Query students by code and cid (custom route)

---

## Notes

- MongoDB database name: `detailsdb`
- The data models use Mongoose references (`ref`) to link degrees and courses to students.
- Make sure to handle saving initial data or seed data as needed for testing.

---
