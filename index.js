var express = require('express');
var todoController = require('./controllers/todoControler');

var app =  express();
//set up template engine
app.set('view engine','ejs');

//static files
app.use(express.static('./public'));

//fire controlers
todoController(app);
app.listen(5000);
console.log("sddss");

