const express = require('express');
const cors = require('cors');
const app = express(); //invoke express

// Controllers
const greetingsController = require('./controllers/greetingsController');

// middleware here
app.use(express.json());
app.use(cors());

//greetings endpoint
app.get('/greetings/:id', (req, res) => {
  res.json(greetingsController(req.params.id));
});

// opening a listening to port 3000 for server
app.listen(3000, console.log('app is listening to port 3000'));
