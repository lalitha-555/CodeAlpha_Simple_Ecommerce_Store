# 🛒 CodeAlpha Simple E-commerce Store

A simple full-stack E-commerce web application developed as part of the **CodeAlpha Full Stack Development Internship**. The project demonstrates user authentication, product management, shopping cart functionality, and MySQL database integration using Node.js and Express.js.

---

## 🚀 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Node.js
- Express.js
- MySQL
- Git & GitHub

---

## ✨ Features

- 👤 User Registration
- 🔐 User Login
- 📦 Product Listing
- 🛍️ Shopping Cart
- 📋 Order Management
- 🔗 REST API Integration
- 🗄️ MySQL Database Connectivity

---

## 📁 Project Structure

```text
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

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/lalitha-555/CodeAlpha_Simple_Ecommerce_Store.git
```

### 2. Open the Project Folder

```bash
cd CodeAlpha_Simple_Ecommerce_Store
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure MySQL

- Install MySQL Server.
- Create the required database.
- Import the required tables.
- Update your database configuration in `backend/db.js` (or `.env` if you use one).

### 5. Start the Backend Server

```bash
cd backend
node server.js
```

Expected Output:

```text
Server is running on http://localhost:3000
MySQL Connected Successfully!
```

### 6. Open the Frontend

Open:

```text
frontend/index.html
```

or use the Live Server extension in VS Code.

---

## 📌 REST API

### User APIs

- Register User
- Login User

### Product APIs

- Get All Products
- Get Product Details

### Order APIs

- Place Order
- View Orders

---

## 🗄️ Database

The project uses **MySQL** with the following tables:

- Users
- Products
- Orders

---

## 📈 Future Enhancements

- Secure Authentication (JWT)
- Online Payment Integration
- Product Search
- Product Filtering
- User Profile
- Order History
- Responsive Mobile Design

---

## 👩‍💻 Developed By

**Lalitha R**

Final Year B.Tech (Computer Science & Engineering)

CodeAlpha Full Stack Development Intern

---

## ⭐ GitHub

If you like this project, don't forget to ⭐ the repository.