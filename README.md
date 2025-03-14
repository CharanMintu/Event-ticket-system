# Show Booking Web Application

## Project Overview
This project is a web application designed for booking tickets for various shows, such as movies, concerts, and theater productions. The platform allows users to browse, book, and manage their tickets, while providing show organizers with tools for managing events. The platform also enables administrators to monitor activities, manage users, and generate reports.

### Objectives
- To develop a comprehensive show booking platform for a seamless user experience.
- To facilitate easy navigation, secure transactions, and efficient management of shows and tickets.

### Key Features
1. **User Module:**
   - **Registration/Login:** Users can create accounts and log in securely.
   - **Show Browsing:** Users can browse shows by filtering based on date, genre, and location.
   - **Ticket Booking:** Users can book tickets, choose seats, and make secure payments.
   - **Booking Management:** Users can view booking history, manage cancellations, and request refunds.

2. **Show Organizer Module:**
   - **Login:** Secure login for show organizers.
   - **Show Management:** Organizers can create and manage show listings, schedules, venue details, and ticket pricing.
   - **Sales Tracking:** Real-time sales analytics for show performance monitoring.

3. **Admin Module:**
   - **Dashboard:** A comprehensive view of platform activities, including user and organizer actions.
   - **User Management:** Admins can manage user accounts.
   - **Reporting:** Admins can generate reports on sales, user demographics, and show popularity.

## Project Flow

1. **User Registration and Login:**
   - Users create accounts and log in securely.
   - User data is validated and stored in MySQL.

2. **Show Browsing and Selection:**
   - Users browse shows using an Angular-based frontend with filtering options.
   - Show details are provided including date, time, venue, and available seats.

3. **Ticket Booking and Payment:**
   - Users can select seats from an interactive seating chart.
   - Payments are securely processed via Spring Boot.

4. **Booking Management:**
   - Users manage bookings, download tickets, and handle cancellations and refunds.
   - Notifications are sent for booking status changes.

5. **Show Organizer Operations:**
   - Organizers create and manage shows, including venue, timings, and ticket prices.
   - Real-time updates ensure show details are current for users.

6. **Administrative Functions:**
   - Admins can monitor user and organizer activity and generate reports.
   - Admins manage support tickets and address user and organizer issues.

## Technology Stack
- **Frontend Technologies:** HTML, CSS, JavaScript, Bootstrap
- **Frontend Framework:** Angular
- **Server-Side Programming:** Spring Boot
- **Backend Frameworks:** Hibernate (ORM), Spring MVC, Spring Boot Rest APIs
- **Programming Language:** Java
- **Database:** MySQL

## Installation Guide

### Prerequisites
1. **Java:** Ensure that JDK 11 or later is installed.
2. **Node.js & npm:** Ensure that Node.js (v14.x or later) and npm are installed for running the Angular application.
3. **MySQL:** Ensure that MySQL is installed and running for database storage.

### Steps to Set Up

#### Backend (Spring Boot)

1. Clone the repository:
   ```bash
   git clone https://github.com/charanreddy/show-booking-app.git
   ```

2. Navigate to the backend directory:
   ```bash
   cd backend
   ```

3. Import the project into your IDE (e.g., IntelliJ IDEA or Eclipse).

4. Install the necessary dependencies:
   ```bash
   ./mvnw clean install
   ```

5. Set up the MySQL database and configure the `application.properties` file in the `src/main/resources` directory with your MySQL database details.

6. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```

#### Frontend (Angular)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Run the Angular application:
   ```bash
   ng serve
   ```

4. Access the application at `http://localhost:4200/`.

## Collaboration

- **Charan** – Backend development, including Spring Boot 
- **Charanreddy** – MySQL integration.
- **Likitha** –Frontend development, including Angular and UI implementation. 


## Future Enhancements

- Integration with third-party payment gateways for global payment options.
- Mobile application version for iOS and Android.
- Advanced analytics for show organizers to monitor user engagement and sales trends.

