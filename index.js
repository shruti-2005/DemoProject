const express = require('express');
const path = require('path');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Example route
app.get('/', (req, res) => {
  res.render('index', { title: 'EJS APP' , message: 'Welcome to the EJS Example Application!' });
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});