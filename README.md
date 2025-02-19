# NoteNestServer

## Overview

NoteNestServer is a Stationery Shop application that provides a robust and user-friendly platform for managing products, secure user authentication, and role-based access. Designed for both public users and administrators, the application ensures smooth product management and a responsive, visually appealing interface.

## Main Features

- **User Registration & Authentication**:
  - Register with name, email, and password.
  - Secure password hashing.
  - JWT token generation on login to manage sessions.
- **Public Routes**:
  - Home Page with Navbar, Banner, Featured Products, and Footer.
  - All Products Page with search and filter functionalities.
  - Detailed Product Pages including "Add to cart" functionality.
  - Informative About Page.
- **Private Routes**:
  - Cart Page for managing orders & payment.
  - Dashboard with role-based access:
    - **Admin Dashboard**: Manage users, products (CRUD), and orders.
    - **User Dashboard**: View orders and manage profile settings.

## Installation & Setup

- Clone the repository.
- Run `pnpm install` to install dependencies.
- Configure environment variables for database, JWT, and payment gateway settings.
- Start the server using `pnpm run start:dev`.

## Design & UI/UX

- Responsive design for seamless operation on various devices.
- User-friendly error handling, loading states, and toasts for notifications.
- Inspired by top stationery and e-commerce websites:
  - [Papier](https://www.papier.com/us/stationery/)
  - [Muji](https://www.muji.us/collections/stationery)
  - [Bungu](https://bungu.store/collections/towels)
  - [Shibuya Stationery](https://shibuya-stationery.com/)
