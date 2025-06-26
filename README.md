# 🛒 Online Store Order Management API

This is a RESTful API for managing **customers**, **products**, and **orders** in a simple online store.  
The API is built with **Node.js**, **TypeScript**, **Prisma ORM**, and **PostgreSQL**, and it uses **pgAdmin v4** for database visualization.

## 📦 Features

### 🧑 Customers
- Create a new customer
- Get all customers
- Get customer by ID (with optional orders)
- Update customer information
- Delete a customer

### 📦 Products
- Create a new product
- Get all products
- Get product by ID
- Update product details
- Delete a product

### 🧾 Orders
- Create a new order with multiple products
- Get all orders
- Get order by ID (including customer and product details)
- Update product quantities in an order
- Delete an order

## 🔁 Relationships

- A **customer** can have multiple **orders**
- An **order** can include multiple **products**
- A **product** can be included in multiple **orders**
- An intermediate table `OrderItem` (with quantity) handles the many-to-many relationship between orders and products

## ⚙️ Tech Stack

- **Node.js** (runtime)
- **TypeScript** (language)
- **Express.js** (API framework)
- **Prisma** (ORM)
- **PostgreSQL** (database)
- **pgAdmin v4** (database GUI)
- **Zod (For validation)
- **dotenv** (for environment configuration)


