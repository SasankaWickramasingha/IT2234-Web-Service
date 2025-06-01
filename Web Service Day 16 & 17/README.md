# Employee Management API

This project is a Node.js API using Express and Mongoose to manage employees, departments, projects, and ETFs data stored in MongoDB.

---

## Files Overview

### Models (`/models`)
1. **Department.js**  
   Defines the Department schema and model.

2. **Employee.js**  
   Defines the Employee schema and model.

3. **ETF.js**  
   Defines the ETF schema and model.

4. **Project.js**  
   Defines the Project schema and model.

### Routes (`/routes`)
5. **departmentRoute.js**  
   Express routes for departments including employee queries and employee counts.

6. **employeeRoute.js**  
   Express routes for employees including project count queries.

7. **etfRoute.js**  
   Express routes for ETF data.

8. **projectRoute.js**  
   Express routes for project data.

### Server
9. **index.js**  
   Sets up the Express server and connects the routes to MongoDB.

---

## Setup Instructions

1. **Place files in the correct folders**  
   - Models go into `/models` folder  
   - Routes go into `/routes` folder  
   - `index.js` in the root project folder

2. **Install dependencies**

```bash
npm install express mongoose
npm init
```

3. **Run MongoDB**

Make sure MongoDB is running locally on `mongodb://localhost:27017/EmployeeinfoDB`.

4. **Start the server**

```bash
node index.js
```

5. **Test API endpoints**

Use tools like Postman or curl to test endpoints like:

- `GET /Department`  
- `GET /Department/emp/:did`  
- `GET /Employee`  
- `GET /Employee/procount`  
- `GET /ETF`  
- `GET /Project`

---

## Notes

- The schema references between models use string IDs.  
- Some demo data is added on model creation (e.g., IT department, sample employee).  
- Routes use Mongoose `.populate()` and aggregation queries to fetch related data.

---
