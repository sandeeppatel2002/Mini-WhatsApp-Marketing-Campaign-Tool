# Mini WhatsApp Marketing Campaign Tool

Mini WhatsApp Marketing Campaign Tool is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, following the MVC (Model-View-Controller) architectural pattern. .

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- Create: Users can create new merketing champpision..
- Read: Users can retrieve List of all merketing champpision from the database.
- Track: User can track all his contect who have sended merketing champpision message

## Installation

1. Clone the repository:

   ```bash
   $ git clone [repository URL]
   $ cd [project directory]
   ```

2. Install backend dependencies:

   ```bash
   $ cd backend
   $ npm install
   ```

3. Install frontend dependencies:

   ```bash
   $ cd ../frontend
   $ npm install
   ```

4. Start the backend server:

   ```bash
   $ cd ../backend
   $ npm run dev
   ```

5. Start the frontend development server:

   ```bash
   $ cd ../frontend
   $ npm start
   ```

6. Open your browser and navigate to `http://localhost:3000` to access the application.

## MVC Architecture

The project source code is divided into two main parts: the frontend and the backend.

### Frontend

The frontend, located in the `frontend` directory, consists of the view components responsible for the user interface and interactions. It is built using React.js and utilizes the Bootstrap framework for responsive and visually appealing UI components. The frontend communicates with the backend API to perform merketing champpision operations and display data to the user.

### Backend

The backend, located in the `backend` directory, consists of the server, models, and controllers. It handles incoming requests from the frontend, interacts with the database, and performs the necessary operations. The backend is built using Node.js, Express.js, and MongoDB. The models define the structure and behavior of the [data type] entities, while the controllers handle the business logic and process the requests.

## API Endpoints

- `GET /api/user/messageList`: To retrieve all Campaign message
- `POST /api/user/newCampaign`: To create new Campaign
- `PATCH /api/user/userList/:id`: track user
