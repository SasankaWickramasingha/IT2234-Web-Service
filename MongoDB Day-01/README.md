# 📚 MongoDB Activity Tutorial

This repository contains a basic MongoDB activity designed to help beginners understand how to insert, query, and sort data using MongoDB's shell commands.

---

## 📥 Inserting Documents

### ➤ Insert One
```js
db.students.insertOne({
  "regno": "2021ict87",
  "name": "Nithya",
  "age": 30,
  "degree": "it",
  "gpa": 3.9,
  "skill": ["35", "MongoDB", "Node"],
  "gender": "Female"
})
```

### ➤ Insert Many
```js
db.students.insertMany([
  {
    "regno": "2021ict10",
    "name": "Tharusha",
    "age": 21,
    "degree": "it",
    "gpa": 2.3,
    "skill": ["35", "MongoDB", "Node"],
    "gender": "male"
  },
  {
    "regno": "2021ict120",
    "name": "Raveen",
    "age": 22,
    "degree": "it",
    "gpa": 3.0,
    "skill": ["35", "MongoDB", "Node"],
    "gender": "male"
  }
])
```

---

## 🔍 Querying Data

### ➤ Find All Males
```js
db.students.find({ "gender": "male" })
```

### ➤ Find One Male
```js
db.students.findOne({ "gender": "male" })
```

### ➤ Age Greater Than 21
```js
db.students.find({ age: { $gt: 21 } })
```

### ➤ Students with MongoDB Skill
```js
db.students.find({ skill: { $in: ["MongoDB"] } })
```

### ➤ Students Without MongoDB Skill
```js
db.students.find({ skill: { $nin: ["MongoDB"] } })
```

---

## 📊 Sorting

### ➤ Sort by GPA (Descending)
```js
db.students.find().sort({ gpa: 1 })
```

### ➤ IT Students Sorted by GPA (Ascending)
```js
db.Students.find({ "degree": "it" }).sort({ gpa: 1 })
```

---

## 📝 Notes

- All commands should be run in the MongoDB shell or compatible environment.
- MongoDB is case-sensitive (`students` ≠ `Students`).

---

## ✅ Outcome

By completing this activity, you will learn:
- How to insert data into a MongoDB collection.
- How to perform basic filtering with queries.
- How to sort results in ascending or descending order.

