// server.js
const express = require('express');
const app = express();
const port = 3000;

// Store votes in memory (for simplicity)
let votes = { actress1: 0, actress2: 0 };

// Serve static files from the "public" directory
app.use(express.static('public'));

// Endpoint to get current votes
app.get('/votes', (req, res) => {
  res.json(votes);
});

// Endpoint to vote for an actress
app.post('/vote/:actress', (req, res) => {
  const actress = req.params.actress;
  if (votes[actress] !== undefined) {
    votes[actress]++;
    res.json({ success: true, votes });
  } else {
    res.status(400).json({ success: false, message: 'Invalid actress' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});