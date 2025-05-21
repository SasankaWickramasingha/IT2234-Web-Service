# 🏫 SchoolAPI

**A RESTful API for managing a school system**, built with **Node.js**, **Express**, and **MongoDB**. It handles data related to Courses, Degrees, and Students with structured endpoints and schema-based validation.

---

## 🌐 Live Overview

- **Base URL**: `http://localhost:3001`
- **Database**: `MongoDB @ mongodb://localhost:27017/SchoolAPI`

---

## 🧰 Tech Stack

| Layer       | Technology        |
|-------------|-------------------|
| Runtime     | Node.js           |
| Framework   | Express.js        |
| Database    | MongoDB (Mongoose)|
| API Tooling | Postman           |

---

## 🛠️ Getting Started

### 📥 Clone and Install

```bash
git clone <your-repo-url>
cd SchoolAPI
npm install
```

### ⚙️ Run MongoDB

Ensure MongoDB is running locally on:

```bash
mongodb://localhost:27017/SchoolAPI
```

### 🚀 Start the Server

```bash
node index.js
```

---

## 🧭 API Endpoints

### 🎓 Courses

| Method | Endpoint             | Action               |
|--------|----------------------|----------------------|
| GET    | `/course`            | List all courses     |
| GET    | `/course/:id`        | Get course by ID     |
| GET    | `/course/code/:cid`  | Get course by code   |
| POST   | `/course`            | Create a new course  |
| PUT    | `/course/:id`        | Update course info   |
| DELETE | `/course/:id`        | Delete a course      |

### 📘 Degrees

| Method | Endpoint   | Action            |
|--------|------------|-------------------|
| GET    | `/degree`  | List all degrees  |

### 🧑‍🎓 Students

| Method | Endpoint   | Action                                |
|--------|------------|----------------------------------------|
| GET    | `/student` | Get all students with their degree info|

---

## 🧪 Testing with Postman

### 🎯 Sample Scenarios

- ✅ Fetch all courses
- ✅ View degrees
- ✅ Get student details with embedded degree

### 📸 Screenshots

> Include the screenshots in `/screenshots/` folder:

- `./screenshots/degree_get.png`
- `./screenshots/student_get.png`

---

## 📦 Project Structure

```
SchoolAPI/
├── models/
│   ├── Course.js
│   ├── Degree.js
│   └── Student.js
├── routes/
│   ├── courseRoute.js
│   ├── degreeRoute.js
│   └── studentRoute.js
├── index.js
└── README.md
```


