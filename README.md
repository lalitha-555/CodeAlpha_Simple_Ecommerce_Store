# 🛒 CodeAlpha Simple E-commerce Store

A simple full-stack E-commerce web application developed as part of the **CodeAlpha Full Stack Development Internship**.

This project demonstrates user registration, login functionality, product listing, shopping cart features, order management, and MySQL database integration using Node.js and Express.js.

---

## 🚀 Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- MySQL
- Git & GitHub

---

## ✨ Features

- 👤 User Registration
- 🔐 User Login
- 📦 Product Listing
- 🛒 Shopping Cart
- 📋 Order Management
- 🔗 REST API Integration
- 🗄️ MySQL Database Connectivity

---

## 📁 Project Structure

```
CodeAlpha_Simple_Ecommerce_Store
│
├── backend
│   ├── controllers
│   │   ├── productController.js
│   │   ├── userController.js
│   │   └── orderController.js
│   │
│   ├── routes
│   │   ├── productRoutes.js
│   │   ├── userRoutes.js
│   │   └── orderRoutes.js
│   │
│   ├── db.js
│   └── server.js
│
├── frontend
│   ├── index.html
│   ├── products.html
│   ├── product.html
│   ├── cart.html
│   ├── checkout.html
│   ├── login.html
│   ├── register.html
│   │
│   ├── css
│   │   └── style.css
│   │
│   ├── js
│   │   ├── products.js
│   │   └── cart.js
│   │
│   └── images
│       ├── laptop.jpg
│       ├── keyboard.jpg
│       ├── mouse.jpg
│       └── headphone.jpg
│
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

## ⚙️ How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/lalitha-555/CodeAlpha_Simple_Ecommerce_Store.git
```

---

### 2. Open the Project Folder

```bash
cd CodeAlpha_Simple_Ecommerce_Store
```

---

### 3. Install Dependencies

```bash
npm install
```

---

### 4. Configure MySQL Database

- Install MySQL Server.
- Create the required database.
- Create the required tables:
  - users
  - products
  - orders
- Update MySQL connection details in:

```
backend/db.js
```

---

### 5. Start Backend Server

Open terminal:

```bash
cd backend
```

Run:

```bash
node server.js
```

Expected output:

```
Server is running on http://localhost:3000
MySQL Connected Successfully!
```

---

### 6. Run Frontend

Open:

```
frontend/index.html
```

or use the VS Code Live Server extension.

---

## 🔗 API Features

### User APIs

- User Registration
- User Login

### Product APIs

- Get Products
- Product Details

### Order APIs

- Create Order
- View Orders

---

## 🗄️ Database

MySQL database is used to store:

- User information
- Product details
- Order information

---

## 📈 Future Enhancements

- JWT Authentication
- Online Payment Integration
- Product Search
- Product Filtering
- User Profile Management
- Order History
- Responsive UI Improvements

---

## 👩‍💻 Developed By

**Lalitha R**

B.Tech Computer Science Engineering Student

CodeAlpha Full Stack Development Intern

---

## ⭐ GitHub Repository

```
https://github.com/lalitha-555/CodeAlpha_Simple_Ecommerce_Store
```
