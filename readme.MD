# Trello-like App Backend

A Node.js and Express backend for the Trello-like app with MongoDB, Mongoose for database operations, and Socket.IO for real-time updates.

## Features

- RESTful API for managing cards.
- WebSocket-based real-time synchronization.
- Drag-and-drop card updates saved to the database.

## Installation

1. Clone the repository:

   ```bash
   git clone <backend-repo-url>
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up `.env` file:

   ```plaintext
   PORT=5000
   DBUSER=<your-db-user>
   DBPASS=<your-db-password>
   DBURL=<your-db-url>
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Server runs at `http://localhost:5000`.

## API Endpoints

- `GET /api/cards`: Fetch all cards.
- `POST /api/cards`: Add a new card.
- `PUT /api/cards/:id`: Update a card (e.g., change list).
- `DELETE /api/cards/:id`: Delete a card.
