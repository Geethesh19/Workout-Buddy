# Workout Buddy Application

This repository contains the code for a full-stack workout buddy application, built using modern web technologies. The application allows users to track workouts, manage authentication, and offers a user-friendly interface.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Directory Structure](#directory-structure)
- [Setup Instructions](#setup-instructions)
  - [Client](#client)
  - [Server](#server)
- [Features](#features)

---

## Technologies Used

- **Frontend**: React.js, Vite
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **State Management**: React Context API

---

## Directory Structure

```
.:
README.md  client  server

./client:
index.html  package-lock.json  package.json  public  src  vite.config.js

./client/public:
vite.svg

./client/src:
App.jsx  components  context  hooks  index.css  main.jsx  pages

./client/src/components:
Navbar.jsx  WorkoutDetails.jsx  WorkoutForm.jsx

./client/src/context:
authContext.jsx  workoutsContext.jsx

./client/src/hooks:
useAuthContext.jsx  useLogin.jsx  useLogout.jsx  useSignup.jsx  useWorkoutContext.jsx

./client/src/pages:
Home.jsx  Login.jsx  Signup.jsx

./server:
controllers  middleware  models  package-lock.json  package.json  routes  server.js

./server/controllers:
userControllers.js  workoutControllers.js

./server/middleware:
requireAuth.js

./server/models:
userModel.js  workoutModel.js

./server/routes:
User.js  workouts.js
```

---

## Setup Instructions

### Client

1. Navigate to the `client` directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Access the client at `http://localhost:5173`.

### Server

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `server` directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=<Your MongoDB Connection URI>
   JWT_SECRET=<Your JWT Secret>
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. The server will run at `http://localhost:5000`.

---

## Features

### Client
- **Navbar**: Navigation bar implemented in `Navbar.jsx`.
- **Workout Details**: Display workout details using `WorkoutDetails.jsx`.
- **Workout Form**: Submit workouts via `WorkoutForm.jsx`.
- **Authentication**: Login, Signup, and Logout functionality managed through `authContext.jsx`, `useLogin.jsx`, `useSignup.jsx`, and `useLogout.jsx`.
- **Pages**: Separate views for `Home`, `Login`, and `Signup` pages.

### Server
- **Controllers**: Handles user and workout logic in `userControllers.js` and `workoutControllers.js`.
- **Models**: MongoDB models for users (`userModel.js`) and workouts (`workoutModel.js`).
- **Routes**: Routes for user (`User.js`) and workout (`workouts.js`) APIs.
- **Middleware**: `requireAuth.js` for protecting workout-related routes.

---
