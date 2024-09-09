# E-Commerce Website
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

This project is an e-commerce website that I developed using some of the modern web technologies. 
The front-end is built with React, and the back-end is powered by Node.js with a MySQL database. 
I also implemented JSON Web Tokens (JWT) for user authentication and authorization.

## Technologies Used

- **Front-End**:
  - React
  - React Router
  - Axios (for API requests)
  - CSS for styling

- **Back-End**:
  - Node.js
  - Express.js
  - MySQL (Database)
  - Sequelize (ORM for MySQL)
  - JSON Web Tokens (JWT) for authentication
  - Bcrypt (for password hashing

## Getting Started

## CONTENTS
- [Installation](#installation)
- [Api Endpoints](#api-endpoints) 
- [Project Working](#video-of-the-project-working)

### Prerequisites
Make sure you have the following installed on your machine:
- Node.js
- MySQL

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/ecommerce-website.git
    cd ecommerce-website
    ```

2. **Install dependencies**:
    - For the backend:
      ```bash
      cd api
      npm install
      ```
    - For the frontend:
      ```bash
      cd frontend
      npm install
      ```

3. **Set up the MySQL database**:
    - Create a new MySQL database:
 ```
sql
     create database userDB;
use userDB;

CREATE TABLE IF NOT EXISTS `userDB`.`products` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `productsName` VARCHAR(100) NULL DEFAULT NULL,
  `price` DOUBLE(10,2) NULL DEFAULT NULL,
  `category` VARCHAR(60) NULL DEFAULT NULL,
  `productDesc` VARCHAR(700) NULL DEFAULT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS `userDB`.`userInfo` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(100) NULL DEFAULT NULL,
  `userPassword` VARCHAR(100) NULL DEFAULT NULL,
  `userEmail` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))

  ```

  - Update the database configuration in `backend/config/config.js` with your MySQL username, password, and database name.

5. **Run the development server**:
    - Backend:
      ```bash
      cd backend
      npm run dev
      ```
    - client:
      ```bash
      cd client
      npm start
      ```

6. **Access the application**:
    - Frontend: `http://localhost:5173/`
    - Backend: `http://localhost:3000`

## API Endpoints

Here are some key API endpoints:

- **User Login**:
  - `POST /login`: Logging a new User
  - 
- **User Creation**:
  - `POST /createuser`: Creating a new user
  - 
- **Token Verification**:
  - `POST /verifyToken`: Validating the user token stored in browser **cookies** on every page change.
  - 
- **Fetching Products in the Home Page**:
  - `POST /homeProducts`: Fetching Products for the Product Page

- **Fetching Products DETAILS!**:
  - `POST /productsDetails`: Fetching the specific **PRODUCT** THAT YOU **CLICKED**.

- **Search System!**:
  - `POST /search`: using the **url parameters** to send a REQ with the id and product name.


## Video of the Project Working:
[![Watch the video](https://img.youtube.com/vi/LliG9WdU898/maxresdefault.jpg)]([https://youtu.be/T-D1KVIuvjA](https://www.youtube.com/watch?v=LliG9WdU898))
 
