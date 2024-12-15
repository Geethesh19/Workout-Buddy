# Workout Buddy Application

This repository contains the code for a full-stack workout buddy application, built using modern web technologies. The application allows users to track workouts, manage authentication, and offers a user-friendly interface.

---

## Technologies Used

- **Frontend**: React.js, Vite
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **State Management**: React Context API

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

## Screenshots

Below are some screenshots to give you an idea of the application's interface and functionality:

### Workout Buddy Home
![Workout Buddy Home](https://drive.google.com/uc?export=view&id=1aN_9zVQ3AtoI-Sazl951i55-GfUs9OPh)

### Workout Buddy GitHub Picture
![Workout Buddy GitHub Picture](https://drive.google.com/uc?export=view&id=1hAfezDaol5xcNOG8H4W1t3bh6kcimHD2)
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
