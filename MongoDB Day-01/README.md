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

![Screenshot 2025-04-25 223703](https://github.com/user-attachments/assets/bf2f084c-7a1b-4fc5-864d-12b2c7a60e4c)


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

![Screenshot 2025-04-25 223835](https://github.com/user-attachments/assets/801ab891-d889-453d-8859-c6a023b146bb)


---

## 🔍 Querying Data

### ➤ Find All Males
```js
db.students.find({ "gender": "male" })
```

![Screenshot 2025-04-25 224016](https://github.com/user-attachments/assets/4267b389-873f-47fe-b605-c99a3e6b9b3d)


### ➤ Find One Male
```js
db.students.findOne({ "gender": "male" })
```

![Screenshot 2025-04-25 224114](https://github.com/user-attachments/assets/77d37b46-c209-41cf-a2b0-4090b0661c3f)

### ➤ Age Greater Than 21
```js
db.students.find({ age: { $gt: 21 } })
```


![Screenshot 2025-04-25 224244](https://github.com/user-attachments/assets/6e4b5793-e8a9-4f9c-a709-1ea600c8300f)

### ➤ Students with MongoDB Skill
```js
db.students.find({ skill: { $in: ["MongoDB"] } })
```

![Screenshot 2025-04-25 224547](https://github.com/user-attachments/assets/2b615cb9-4b48-42a7-a332-21934635091d)


### ➤ Students Without MongoDB Skill
```js
db.students.find({ skill: { $nin: ["MongoDB"] } })
```

![Screenshot 2025-04-25 224640](https://github.com/user-attachments/assets/7b4f74f1-4963-4808-8885-21f32e12c8ae)


---

## 📊 Sorting

### ➤ Sort by GPA (Descending)
```js
db.students.find().sort({ gpa: 1 })
```

![Screenshot 2025-04-25 224743](https://github.com/user-attachments/assets/4b6d326e-cbb4-4663-ba1a-bbf9b9bffb54)


### ➤ IT Students Sorted by GPA (Ascending)
```js
db.Students.find({ "degree": "it" }).sort({ gpa: 1 })
```

![Screenshot 2025-04-25 224853](https://github.com/user-attachments/assets/00bf7fc3-65ae-41f1-a868-877fc453af97)


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

