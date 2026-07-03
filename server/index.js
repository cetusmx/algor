const express = require('express');
const cors = require('cors');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3030;

// Middleware
app.use(cors());
app.use(express.json());

// Init SQLite DB (in-memory for now, can be changed to file)
const db = new sqlite3.Database('/app/data/algor.sqlite', (err) => {
  if (err) {
    console.error('Error connecting to SQLite DB:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'algor API is running' });
});

// Serve static files from the React app
const clientBuildPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientBuildPath));

// Catch-all to route React Router requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
