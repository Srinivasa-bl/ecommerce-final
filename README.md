Project Overview
VividHands is a curated e-commerce marketplace connecting skilled artisans with buyers looking for unique, handcrafted products. The frontend is built with React.js and styled using Bootstrap for a responsive UI. The backend uses Spring Boot with REST APIs, JWT-based authentication, and business logic. MySQL is used for storing users, products, orders, and other data. The platform is secure, scalable, and user-friendly.

How to Run the Project

Prerequisites

Java JDK 11 or above

Maven (or use the Maven wrapper)

Node.js and npm

MySQL server installed and running

MySQL database created for the project

MySQL Setup

Start MySQL server.

Log in to MySQL and create the database:

sql
Copy
Edit
CREATE DATABASE vividhands_db;
(Optional) Create a dedicated user:

sql
Copy
Edit
CREATE USER 'vividhands_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON vividhands_db.* TO 'vividhands_user'@'localhost';
FLUSH PRIVILEGES;
Backend Setup (Spring Boot + MySQL)

Configure Database:
Edit backend/src/main/resources/application.properties:

properties
Copy
Edit
spring.datasource.url=jdbc:mysql://localhost:3306/vividhands_db  
spring.datasource.username=your_mysql_username  
spring.datasource.password=your_mysql_password  
spring.jpa.hibernate.ddl-auto=update
Run Backend Server:
Navigate to the backend folder and run:

bash
Copy
Edit
./mvnw spring-boot:run
Server runs at: http://localhost:8080

Frontend Setup (React.js + Bootstrap)

Install Dependencies:
Navigate to the frontend folder and run:

bash
Copy
Edit
npm install
Start Frontend Server:

bash
Copy
Edit
npm start
Frontend opens at: http://localhost:3000


