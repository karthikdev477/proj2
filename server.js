'use strict';

// const express = require('express');

// // Constants
// const PORT = 8080;
// const HOST = '0.0.0.0';

// // App
// const app = express();
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// app.listen(PORT, HOST);
// console.log(`Running on http://${HOST}:${PORT}`);

var express = require('express'); 
var app = express(); 
var PORT = 8000; 
  
// View engine setup 
app.set('view engine', 'ejs'); 
app.use(express.static('images'));
// Without middleware 
app.get('/', function(req, res){ 
  
    // Rendering home.ejs page 
    res.render('home', {coming: process.env.COMING}); 
}) 
  
app.listen(PORT, function(err){ 
    if (err) console.log(err); 
    console.log("Server listening on PORT", PORT); 
}); 