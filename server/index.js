const express = require('express');
const app = express();
const port = process.env.PORT || 3030;

app.use(express.static('dist'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'algor B2B API is running' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
