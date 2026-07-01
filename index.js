import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend connection
app.use(cors());
app.use(express.json());

// Basic health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Chat server is running' });
});

const httpServer = createServer(app);

// Initialize Socket.io with CORS configuration
const io = new Server(httpServer, {
  cors: {
    origin: '*', // In production, restrict this to the frontend URL
    methods: ['GET', 'POST']
  }
});

// Track connected users
let activeUsersCount = 0;

io.on('connection', (socket) => {
  activeUsersCount++;
  console.log(`User connected: ${socket.id}. Active users: ${activeUsersCount}`);
  
  // Broadcast the updated count to all connected clients
  io.emit('user_count', activeUsersCount);

  // Listen for chat messages
  socket.on('send_message', (data) => {
    console.log('Received message:', data);
    
    // Broadcast the message to all connected clients
    io.emit('receive_message', {
      id: `${socket.id}-${Date.now()}`,
      username: data.username,
      text: data.text,
      timestamp: data.timestamp || new Date().toISOString()
    });
  });

  // Handle client disconnection
  socket.on('disconnect', () => {
    activeUsersCount = Math.max(0, activeUsersCount - 1);
    console.log(`User disconnected: ${socket.id}. Active users: ${activeUsersCount}`);
    
    // Broadcast the updated count
    io.emit('user_count', activeUsersCount);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
