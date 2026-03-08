const express = require("express");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Allow frontend domains
const allowedOrigins = [
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("CORS not allowed"));
    },
    credentials: true
  })
);

// API routes
app.use("/api", contactRoutes);

// Health check (important for Render)
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Backend running"
  });
});

// Root route (prevents 404 on Render)
app.get("/", (req, res) => {
  res.send("Portfolio Backend API running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});