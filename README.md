Project Overview
VividHands is a curated e-commerce marketplace designed to connect skilled artisans with buyers who appreciate unique, handcrafted products. The platform uses a modern tech stack to deliver a secure, scalable, and user-friendly experience. The frontend is built using React.js and styled with Bootstrap, providing a dynamic and responsive interface. The backend is developed using Spring Boot, featuring RESTful APIs, secure JWT-based authentication, and robust business logic. Data is stored in a MySQL database, efficiently managing users, products, orders, and roles. The system emphasizes clean architecture, modular code, and ethical shopping.

How to Run the Project

Prerequisites

Java JDK 11 or above

Maven (or use the Maven Wrapper)

Node.js and npm

MySQL Server installed and running

A MySQL database created for the project

Backend Setup (Spring Boot + MySQL)

Configure Database
Update the MySQL connection settings in backend/src/main/resources/application.properties:

properties
Copy
Edit
spring.datasource.url=jdbc:mysql://localhost:3306/vividhands_db
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
Run the Backend Server
Open a terminal, navigate to the backend folder, and run:

bash
Copy
Edit
./mvnw spring-boot:run
This starts the backend API server at: http://localhost:8080

Optional: If Swagger is enabled, API docs are available at:
http://localhost:8080/swagger-ui.html

Frontend Setup (React.js + Bootstrap)

Install Dependencies
Open a new terminal, navigate to the frontend folder, and run:

bash
Copy
Edit
npm install
Configure API Base URL
(Optional but recommended) Create a .env file in the frontend root with the following:

ini
Copy
Edit
REACT_APP_API_BASE_URL=http://localhost:8080
Start the Frontend Server

bash
Copy
Edit
npm start
The frontend will launch in your default browser at:
http://localhost:3000

Project Features

Artisan registration, profile management, and product listings

Customer browsing, filtering, and ordering functionality

Secure user authentication with JWT (Spring Security)

Role-based access: Admin, Artisan, Customer

Admin panel for managing users, products, and orders

Product categories, image uploads, and order history

Responsive design with Bootstrap for mobile compatibility

Development Tips

Use Postman to test backend APIs.

Ensure MySQL server is running before launching backend.

Enable CORS in Spring Boot for frontend-backend communication.

Use browser dev tools or React DevTools to inspect UI states.
