const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require('./src/routes/api/adminRoute');
const db = require('./src/config/database');

const app = express();
const PORT = process.env.PORT || 4000;

// cors
app.use(cors());

// body parser
app.use(bodyParser.json());
app.use(express.text());
app.use(express.urlencoded({extended: false}));

// cookie
app.use(cookieParser());

// Serve static files from the 'public' directory
app.use(express.static('public'));



db.connect((err) => {
  if (err) throw err;

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});

app.use(routes);
