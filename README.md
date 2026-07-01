# QuickChat - Real-Time Chat Application

QuickChat is a responsive, modern real-time chat application built with React on the frontend and Node.js/Express/Socket.io on the backend. It features premium glassmorphic UI aesthetics, smooth animations, and active connection tracking.

---

## Features

- **Real-Time Communication**: Instantly transmit and receive messages across all connected clients via Socket.io.
- **Glassmorphic UI Design**: A stunning premium theme featuring dark mode gradients, translucent cards, subtle animations, and high contrast typography.
- **User Connection Count**: Live status indicator in the header showing the current number of online users.
- **Session Retention**: Remembers the user's username using browser session storage so reloading doesn't interrupt their chat session.
- **Auto-Scrolling messages**: Automatically scrolls down as new messages are sent or received.
- **Responsive Layout**: Adapts smoothly to desktop, tablet, and mobile screens.

---

## Technologies Used

### Frontend
- **React**: Modern functional components with hooks.
- **Vite**: Ultra-fast build tool and local dev server.
- **Socket.io Client**: For WebSockets connection to the server.
- **Lucide React**: Clean and minimal modern iconography.
- **Vanilla CSS**: Premium bespoke responsive styles.

### Backend
- **Node.js**: Server runtime.
- **Express**: Lightweight web framework for HTTP routes.
- **Socket.io**: real-time bidirectional event-based communication.
- **CORS**: Cross-origin resource sharing middleware.
- **Nodemon**: Auto-restarts server on changes (dev dependency).

---

## Project Structure

```text
chat-app/
├── client/                     # React App (Vite)
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── assets/             # Icons & images
│   │   ├── components/
│   │   │   ├── Login.jsx       # Username entry screen
│   │   │   └── ChatRoom.jsx    # Core chat room screen
│   │   ├── App.css             # Secondary overrides (empty)
│   │   ├── App.jsx             # Main router and Socket setup
│   │   ├── index.css           # Premium design system styles
│   │   └── main.jsx            # Application mount point
│   ├── index.html              # Main HTML document (injects Google Fonts)
│   ├── package.json            # Client dependencies
│   └── vite.config.js          # Vite config
│
└── server/                     # Node.js + Express Server
    ├── index.js                # Server logic & Socket.io handling
    └── package.json            # Server dependencies
```

---

## Setup & Running Instructions

Ensure you have [Node.js](https://nodejs.org/) installed (v16+ recommended).

### 1. Backend Server Setup & Start

1. Navigate to the server folder:
   ```bash
   cd chat-app/server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server in development mode (with auto-reload):
   ```bash
   npm run dev
   ```
   *The server will run on [http://localhost:5000](http://localhost:5000).*

### 2. Frontend Client Setup & Start

1. Open a new terminal window and navigate to the client folder:
   ```bash
   cd chat-app/client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The client will start, usually on [http://localhost:5173](http://localhost:5173).*

---

## Manual Verification / How to Test

1. Open your browser and go to [http://localhost:5173](http://localhost:5173).
2. Enter a username (e.g. `Maverick`) and click **Join Chat**.
3. Open a second browser window (or private browsing tab) and go to [http://localhost:5173](http://localhost:5173) as well.
4. Enter another username (e.g. `Trinity`) and click **Join Chat**.
5. Observe the active user count in the header updates to `2 users online`.
6. Send messages back and forth. You will see they appear instantly in both windows.
