# CodeAlpha Simple Ecommerce Store

A simple e-commerce web application developed as part of the CodeAlpha Full Stack Development Internship.

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- MySQL

## Features

- User Registration
- User Login
- Product Listing
- Product Management
- Shopping Cart
- Order Management
- MySQL Database Connectivity
- REST API Integration

## Project Structure

```
CodeAlpha_Simple_Ecommerce_Store

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
└── .gitignore
```

## How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/lalitha-555/CodeAlpha_Simple_Ecommerce_Store.git
```

### 2. Install Dependencies

Open the project folder in terminal and run:

```bash
npm install
```

### 3. Configure Database

- Install MySQL.
- Create the required database.
- Update MySQL database details in the `.env` file.

### 4. Start Backend Server

Run:

```bash
node backend/server.js
```

The backend server will start successfully.

### 5. Open Frontend

Open the following file in your browser:

```
frontend/index.html
```

## API Features

The backend provides APIs for:

- User Management
- Product Management
- Order Management

## Database

MySQL database is used to store:

- User details
- Product information
- Order details

## Future Enhancements

- Online payment integration
- User authentication
- Product search and filtering
- Responsive UI improvements

## Developed By

**Lalitha R**