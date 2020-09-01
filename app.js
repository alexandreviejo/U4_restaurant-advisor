const express = require('express');
const path = require('path');
const routes = require('./routes/index');

// create our Express app
const app = express();

// serves up static files from the public folder. Anything in public/ will just be 
// served up as the file it is
app.use(express.static(path.join(__dirname, 'public')));

// VIEWS: this is the folder where we keep our pug files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); // we use the engine pug

//Express body-parser implementation -> access to req.body
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

//ROUTER: anytime someone goes to "/anything", we will handle it with the module "routes"
app.use('/', routes);


module.exports = app;
