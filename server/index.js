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

const fs = require('fs');

// Init SQLite DB with fallback for directories
const dbDir = process.env.DB_DIR || (fs.existsSync('/app/data') ? '/app/data' : path.join(__dirname, '../data'));
if (!fs.existsSync(dbDir)) {
  try {
    fs.mkdirSync(dbDir, { recursive: true });
  } catch (e) {
    console.warn('Could not create db directory, fallback to current dir:', e.message);
  }
}
const dbPath = path.join(dbDir, 'algor.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error connecting to SQLite DB:', err.message);
  } else {
    console.log(`Connected to SQLite database at ${dbPath}`);
    db.run(`
      CREATE TABLE IF NOT EXISTS bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        company TEXT,
        whatsapp TEXT NOT NULL,
        booking_date TEXT NOT NULL,
        time_slot TEXT NOT NULL,
        notes TEXT,
        status TEXT DEFAULT 'PENDING_CONFIRMATION',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
});

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'algor API is running' });
});

// GET busy slots for a specific date
app.get('/api/bookings/busy', (req, res) => {
  const { date } = req.query;
  if (!date) {
    return res.status(400).json({ error: 'date query parameter is required (YYYY-MM-DD)' });
  }

  db.all(
    'SELECT time_slot FROM bookings WHERE booking_date = ? AND status != ?',
    [date, 'CANCELLED'],
    (err, rows) => {
      if (err) {
        console.error('Error fetching busy slots:', err.message);
        return res.status(500).json({ error: 'Database error' });
      }
      const busySlots = (rows || []).map((r) => r.time_slot);
      res.json({ busySlots });
    }
  );
});

// POST a new booking
app.post('/api/bookings', (req, res) => {
  const { name, email, company, whatsapp, date, timeSlot, notes } = req.body;

  if (!name || !email || !whatsapp || !date || !timeSlot) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  db.get(
    'SELECT id FROM bookings WHERE booking_date = ? AND time_slot = ? AND status != ?',
    [date, timeSlot, 'CANCELLED'],
    (err, existing) => {
      if (err) {
        console.error('Error checking slot availability:', err.message);
        return res.status(500).json({ error: 'Database error' });
      }

      if (existing) {
        return res.status(409).json({ error: 'Este horario acaba de ser reservado. Por favor selecciona otro.' });
      }

      const stmt = db.prepare(`
        INSERT INTO bookings (name, email, company, whatsapp, booking_date, time_slot, notes, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, 'PENDING_CONFIRMATION')
      `);

      stmt.run([name, email, company || '', whatsapp, date, timeSlot, notes || ''], function(insertErr) {
        if (insertErr) {
          console.error('Error creating booking:', insertErr.message);
          return res.status(500).json({ error: 'Error al registrar la cita' });
        }

        res.json({
          success: true,
          bookingId: this.lastID,
          message: 'Reservación creada con éxito'
        });
      });
      stmt.finalize();
    }
  );
});

// Serve static files from the React app
const clientBuildPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientBuildPath));

// Catch-all to route React Router requests to index.html
app.use((req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
