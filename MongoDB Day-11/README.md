# MongoDB Operations for `degrees` Collection

This project contains a set of MongoDB operations for managing a `degrees` collection in the `unidb` database, along with an example update to the `students` collection.

## Getting Started

Ensure you have MongoDB installed and running. Connect to your MongoDB instance and switch to the `unidb` database:

```js
use unidb
```
![Screenshot 2025-05-04 193730](https://github.com/user-attachments/assets/808ecfd2-1449-4cd8-94a0-0729c0f0c0c7)

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
![Screenshot 2025-04-30 213149](https://github.com/user-attachments/assets/c6776d51-2026-4392-b80c-80d69f44bc63)

### 2. Delete a Single Degree Record

```js
db.degrees.deleteOne({ _id: ObjectId('680ee99768e381a796b3ebbb') })
```
![Screenshot 2025-04-30 213318](https://github.com/user-attachments/assets/cdd57481-47e3-4cca-a813-2f4b34ba8d19)

### 3. Use Projection to View Specific Fields

```js
db.degrees.find().projection(['name', 'duration'])
```
![Screenshot 2025-04-30 213412](https://github.com/user-attachments/assets/1d77be77-f5e0-4b15-a923-691ca89169ba)

### 4. Display Results Nicely (Pretty Format)

```js
db.degrees.find({}, { name: 1, _id: 0 }).pretty()
```
![Screenshot 2025-04-30 213508](https://github.com/user-attachments/assets/f5e92f45-346e-46ec-b058-5be31a5b2474)

### 5. Delete Multiple Degrees

```js
db.degrees.deleteMany({ duration: { $lt: 4 } })
```
![Screenshot 2025-04-30 213609](https://github.com/user-attachments/assets/fb8be341-a80f-459e-9ef4-cd29c60f4183)

### 6. Update One Degree Record

```js
db.degrees.updateOne(
  { _id: ObjectId('680eef7e6fed053af3f24379') },
  { $set: { name: 'Bachelor in IT', duration: 3 } }
)
```
![Screenshot 2025-04-30 213655](https://github.com/user-attachments/assets/4d62985e-b8e5-4181-968e-0f4e5b038255)


### 7. Update Skills Array in Students Collection

```js
db.Students.updateOne(
  { regNo: '2021IT001' },
  { $push: { skills: 'PHP' } }
)
```
![Screenshot 2025-04-30 213740](https://github.com/user-attachments/assets/e019afd0-57f2-463d-b416-da3f93ba52ec)

### 8. Update Many Degrees

```js
db.degrees.updateMany(
  { duration: { $gte: 4 } },
  { $inc: { duration: 1 } }
)
```
![Screenshot 2025-04-30 213821](https://github.com/user-attachments/assets/78c8132d-7160-413e-9348-351848bb001f)

## Notes

- Replace `ObjectId(...)` with actual IDs from your database.
- Ensure your collection names match (`degrees`, `Students`, etc.).


