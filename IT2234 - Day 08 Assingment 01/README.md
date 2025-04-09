
# Getting Started with Express API 🚀

This guide will help you set up and run your Express-based API project on your local machine.

---

## 📦 Installation Steps

1. **Initialize your Node.js project**  
   Run the following command in your terminal to create a `package.json` file:
   ```bash
   npm init
   ```

2. **Install Express.js**  
   To install Express, use the following command:
   ```bash
   npm install express
   ```

---

## ▶️ Running the Server

3. **Run `index.js` to start the server**  
   In your terminal, run:
   ```bash
   node index.js
   ```  
   This will start the server on port `3001`.

---

## 🛠️ Tools Required

4. **Install Postman**  
   Download and install [Postman](https://www.postman.com/downloads/) on your computer to test your API endpoints easily.

---

## 🔗 API Testing with Postman

After starting your server, test the following endpoints in Postman:

- **User Summary Endpoint**
  ```http
  GET http://localhost:3001/users/summary/1
  ```

- **Comments by Post ID Endpoint**
  ```http
  GET http://localhost:3001/comments/post/1
  ```

Make sure the server is running when testing the above routes.

---

## ✅ You're All Set!

You can now continue building your application and testing it using Postman. Happy developing! 🎉
