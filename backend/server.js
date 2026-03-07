const express = require('express');
const cors = require('cors');
require('dotenv').config();
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

// Routes
app.use('/api', contactRoutes);

// Health check
app.get('/health', (req, res) => {
  res.status(200).send('API is healthy');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
