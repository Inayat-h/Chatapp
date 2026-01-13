const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRouter = require("./routers/userRouter");
const messageRouter = require("./routers/messageRouter");

const { server, app } = require("./socketIo/server");

const Url = process.env.MONGOURL;
const PORT = process.env.PORT || 4002;

// MongoDB
mongoose
  .connect(Url)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Middlewares
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/api/user", userRouter);
app.use("/api/message", messageRouter);

// FRONTEND SERVE (Render fix)
const frontendPath = path.join(__dirname, "..", "frontend", "chatbox", "dist");

app.use(express.static(frontendPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Start server
server.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
