require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');
const indexRoute = require('./routes/routes');
const authRoute = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 4000;

// MongoDB connection
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to MongoDB'));

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: 'my secret key',
    saveUninitialized: true,
    resave: false
  })
);

app.use(flash());

app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      }
      res.redirect('/login');
    });
  });

  
// Static route for image upload
app.use(express.static('uploads'));

// CSS folder - public
app.use('/public', express.static('public'));

// Set template engine
app.set('view engine', 'ejs');

// Routes
app.use('/', indexRoute);
app.use('/', authRoute);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/login`);
});
