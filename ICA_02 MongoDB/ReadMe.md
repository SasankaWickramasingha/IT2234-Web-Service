
# MongoDB Compass ICAE 02

---

## ✅ Task 1: Create Collections and Insert Documents

1. **Create Database**: `school`
2. **Create Collections**: `students` and `grades`
3. **Insert Documents**: Use the JSON documents from the provided data.

---

## ✅ Task 2: Show Both Collections in Table View

> In MongoDB Compass: Select the collection → Click on **Table** tab (next to JSON tab).  

---

## ✅ Task 3: Find Female Students (Display Only Name, Age, Gender)

```js
db.students.find(
  { gender: "Female" },
  { name: 1, age: 1, gender: 1, _id: 0 }
)
```

---

## ✅ Task 4: Students Younger Than 22 and Enrolled After 2020

```js
db.students.find(
  { age: { $lt: 22 }, enrollmentYear: { $gt: 2020 } }
)
```

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

## ✅ Task 6: Count Students Who Studied "Mathematics"

```js
db.students.countDocuments({ major: "Mathematics" })
```

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

---

