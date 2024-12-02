LinkedIn Job Portal Project

Overview
This project is a LinkedIn-style job portal application that includes user authentication and navigation through various pages. The portal connects users with job opportunities and provides a platform for seamless interaction through a user-friendly interface. The project is built using HTML, CSS, Node.js, React, and Material-UI, and runs in Visual Studio Code (VSCode).

Features
User Authentication: A login system where usernames and passwords are validated. Successful login redirects to the homepage, while incorrect credentials trigger an alert.
REST API: A structured folder hierarchy for backend implementation.
Frontend: Built with React components and React Router for seamless navigation.
Reusable Components: A Navbar component and a card component for displaying content.
Dynamic Display: Buttons on the card component are dynamically displayed based on props.

API Endpoint
Login Endpoint: The route /users/login on localhost:8000 receives POST requests for user login validation.
Validation: Email and password are checked against stored user data. Successful authentication redirects to the homepage, and failed attempts display an alert.

Pages Created Using React Components
1 Home
2 About Us
3 Jobs
4 Contact
5 Gallery
6 Logout Button: Allows the user to log out and return to the login page.

Navigation
A reusable Navbar component is present on the Home, About Us, Jobs, Contact, and Gallery pages, allowing users to toggle between different sections of the portal.

Card Component
The card component is reused across pages and accepts three props:
header: The title of the card.
description: A brief explanation displayed on the card.
isShowButton: A boolean that determines whether a button is displayed.

Technologies Used
Frontend: React, React Router, Material-UI
Backend: Node.js, Express
Database: MongoDB (or any preferred database)
Development Environment: Visual Studio Code (VSCode)
