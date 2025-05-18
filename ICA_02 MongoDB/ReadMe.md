
# MongoDB Compass ICAE 02

---

## ✅ Task 1: Create Collections and Insert Documents

1. **Create Database**: `school`
2. **Create Collections**: `students` and `grades`
3. **Insert Documents**: Use the JSON documents from the provided data.

---
<img width="959" alt="1" src="https://github.com/user-attachments/assets/3d7039fe-99d8-4dc4-9cab-f035c06fb667" />
<img width="959" alt="2" src="https://github.com/user-attachments/assets/3c70571d-03f9-4715-be57-510ccc395e4e" />



## ✅ Task 2: Show Both Collections in Table View

> In MongoDB Compass: Select the collection → Click on **Table** tab (next to JSON tab).  

---
<img width="959" alt="table view 1" src="https://github.com/user-attachments/assets/5c1f45f1-d4ac-45ad-b984-353d3391a51f" />
<img width="958" alt="table view 2" src="https://github.com/user-attachments/assets/6460ce9e-a333-4059-b895-19ca91730eba" />



## ✅ Task 3: Find Female Students (Display Only Name, Age, Gender)

```js
db.students.find(
  { gender: "Female" },
  { name: 1, age: 1, gender: 1, _id: 0 }
)
```
<img width="959" alt="3" src="https://github.com/user-attachments/assets/359f51c2-67d0-49c2-b61b-ebcc205de0ad" />


---

## ✅ Task 4: Students Younger Than 22 and Enrolled After 2020

```js
db.students.find(
  { age: { $lt: 22 }, enrollmentYear: { $gt: 2020 } }
)
```
<img width="959" alt="4" src="https://github.com/user-attachments/assets/d4550e9a-b09e-4cc7-bfd6-761da4e3b0f2" />


---

## ✅ Task 5: All Grades for "Alice Johnson"

db.students.aggregate([
  { $match: { name: "Alice Johnson" } },
  {
    $lookup: {
      from: "grades",
      localField: "_id",
      foreignField: "studentId",
      as: "grades"
    }
  },
  {
    $project: {
      name: 1,
      grades: 1,
      _id: 0
    }
  }
])


---
<img width="958" alt="5" src="https://github.com/user-attachments/assets/f5061151-4370-46d4-9b35-6a7e7d38ec1e" />


## ✅ Task 6: Count Students Who Studied "Mathematics"

```js
db.students.countDocuments({ major: "Mathematics" })
```
<img width="959" alt="6" src="https://github.com/user-attachments/assets/4966c940-2222-4017-ae5b-400d9e82728a" />


---

## ✅ Task 7: Students With Grades in Term "Fall 2022"

```js
db.grades.aggregate([
  { $match: { term: "Fall 2022" } },
  {
    $lookup: {
      from: "students",
      localField: "studentId",
      foreignField: "_id",
      as: "student"
    }
  },
  { $unwind: "$student" },
  {
    $project: {
      _id: 0,
      subject: 1,
      score: 1,
      term: 1,
      studentName: "$student.name",
      studentEmail: "$student.email",
      studentMajor: "$student.major",
      studentAge: "$student.age"
    }
  }
])

```
<img width="941" alt="7" src="https://github.com/user-attachments/assets/76ed60d9-6902-44ae-abe5-435646517c26" />


---

