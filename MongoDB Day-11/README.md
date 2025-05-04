# MongoDB Operations for `degrees` Collection

This project contains a set of MongoDB operations for managing a `degrees` collection in the `unidb` database, along with an example update to the `students` collection.

## Getting Started

Ensure you have MongoDB installed and running. Connect to your MongoDB instance and switch to the `unidb` database:

```js
use unidb
```

## Operations

### 1. Insert Multiple Degree Records

```js
db.degrees.insertMany([
  { "name": "BIT", "duration": 3 },
  { "name": "Bsc in Applied Mathematics", "duration": 3 },
  { "name": "Bsc in Environmental Science", "duration": 4 },
  { "name": "Bsc in Computer Science", "duration": 4 }
])
```

### 2. Delete a Single Degree Record

```js
db.degrees.deleteOne({ _id: ObjectId('680ee99768e381a796b3ebbb') })
```

### 3. Use Projection to View Specific Fields

```js
db.degrees.find().projection(['name', 'duration'])
```

### 4. Display Results Nicely (Pretty Format)

```js
db.degrees.find({}, { name: 1, _id: 0 }).pretty()
```

### 5. Delete Multiple Degrees

```js
db.degrees.deleteMany({ duration: { $lt: 4 } })
```

### 6. Update One Degree Record

```js
db.degrees.updateOne(
  { _id: ObjectId('680eef7e6fed053af3f24379') },
  { $set: { name: 'Bachelor in IT', duration: 3 } }
)
```

### 7. Update Skills Array in Students Collection

```js
db.Students.updateOne(
  { regNo: '2021IT001' },
  { $push: { skills: 'PHP' } }
)
```

### 8. Update Many Degrees

```js
db.degrees.updateMany(
  { duration: { $gte: 4 } },
  { $inc: { duration: 1 } }
)
```

## Notes

- Replace `ObjectId(...)` with actual IDs from your database.
- Ensure your collection names match (`degrees`, `Students`, etc.).


