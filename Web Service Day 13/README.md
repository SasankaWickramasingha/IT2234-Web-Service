# 📚 Course Management API

A lightweight RESTful API for managing university courses using **Node.js**, **Express**, and **MongoDB**. Supports full CRUD operations and provides endpoints for accessing course data by ID or course code.

---

## 🧰 Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (Mongoose ODM)  

---

## 📦 Getting Started

### 🔧 Installation

```bash
# Initialize project and install dependencies
npm init -y
npm install express mongoose
```

### ▶️ Run Locally

Ensure MongoDB is running locally on port `27017`.

```bash
node index.js
```

Access the server at: [http://localhost:3001](http://localhost:3001)

---

## 🧭 API Reference

All routes are prefixed with `/Course`

| Method | Endpoint                 | Description                     |
|--------|--------------------------|---------------------------------|
| GET    | `/Course/`               | Fetch all courses               |
| GET    | `/Course/:id`            | Fetch course by ObjectId        |
| GET    | `/Course/code/:cid`      | Fetch course by course code     |
| POST   | `/Course/`               | Create a new course             |
| PUT    | `/Course/:id`            | Update an existing course       |
| DELETE | `/Course/:id`            | Delete a course                 |

---

## 📄 Sample Data

### 🧾 Course JSON

```json
{
  "code": "IT2234",
  "name": "Practical for Web Services",
  "credits": 3,
  "description": "Build a REST API with NodeJS Technology"
}
```

---

## 🧪 Postman Test Suite

### ✅ Create a Course

```
POST /Course/
Content-Type: application/json
```

**Body**:
```json
{
  "code": "IT2234",
  "name": "Practical for Web Services",
  "credits": 3,
  "description": "Build a REST API with NodeJS"
}
```

### 🔍 Get All Courses

```
GET /Course/
```

### 🔍 Get Course by ID

```
GET /Course/<course-id>
```

### 🔍 Get Course by Code

```
GET /Course/code/IT2234
```

### ✏️ Update a Course

```
PUT /Course/<course-id>
Content-Type: application/json
```

**Body**:
```json
{
  "code": "IT2234",
  "name": "Updated Course Name",
  "credits": 4,
  "description": "Updated course description"
}
```

### 🗑️ Delete a Course

```
DELETE /Course/<course-id>
```

---

## 📌 Notes

- MongoDB URL: `mongodb://localhost:27017/unidb`
- Default server port: `3001`
