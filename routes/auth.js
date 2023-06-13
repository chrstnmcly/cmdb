const express = require('express');
const router = express.Router();
const loginModel = require('../models/login');

router.get('/login', (req, res) => {
    res.render('login', { message: req.flash('error') });
  });
  
  router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
    const user = loginModel.findOne(email);
  
    if (user && user.email === email) {
      req.session.user = user;
      res.redirect('/telephone');
    } else {
      req.flash('error', 'Invalid email or password');
      res.redirect('/login');
    }
  });
  
  
  
  router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
  });


module.exports = router;
