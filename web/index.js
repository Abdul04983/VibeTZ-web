import likeRoutes from "./routes/likeRoutes.js";
app.use("/api/like", likeRoutes);
import commentRoutes from "./routes/commentRoutes.js";
app.use("/api/comment", commentRoutes);
import notificationRoutes from "./routes/notificationRoutes.js";
app.use("/api/notification", notificationRoutes);
import http from "http";
import { Server } from "socket.io";

// Server setup
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // au chagua origin yako
    methods: ["GET", "POST"]
  }
});

// Socket.io events
io.on("connection", (socket) => {
  console.log("User connected: " + socket.id);

  socket.on("send_message", (data) => {
    socket.broadcast.emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected: " + socket.id);
  });
});

// Listen with server instead of app
server.listen(5000, () => {
  console.log("Server running on port 5000");
});
