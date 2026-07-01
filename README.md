# QuickChat 💬

QuickChat is a simple real-time chat application built using **React**, **Node.js**, **Express**, and **Socket.io**. It allows multiple users to join the chat using a username and exchange messages instantly in a clean and responsive interface.

---

## Features

- 🚀 Real-time messaging with Socket.io
- 👤 Dummy username login
- 💬 Send and receive messages instantly
- 🕒 Message timestamps
- 📱 Responsive and modern UI
- ⚡ Fast and lightweight

---

## Tech Stack

### Frontend
- React
- Vite
- CSS
- Socket.io Client

### Backend
- Node.js
- Express.js
- Socket.io
- CORS

---

## Project Structure

```
quick-chat/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── server.js
│   └── package.json
│
├── package.json
├── package-lock.json
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Go to the project directory

```bash
cd quick-chat
```

Install dependencies

```bash
npm install
```

Install frontend dependencies

```bash
cd client
npm install
```

Install backend dependencies

```bash
cd ../server
npm install
```

---

## Run the Project

Start Backend

```bash
cd server
npm start
```

Start Frontend

```bash
cd client
npm run dev
```

Frontend

```
http://localhost:5173
```

Backend

```
http://localhost:5000
```

---

## How It Works

1. Enter a username.
2. Join the chat room.
3. Send messages in real time.
4. Connected users instantly receive new messages.
5. Every message displays the sender name and timestamp.

---

## Future Improvements

- User authentication
- Chat history database
- Typing indicator
- Online user list
- Private messaging
- Emoji support

---

## Author

**Abhishek Anand**
