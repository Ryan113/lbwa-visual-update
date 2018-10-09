const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();

// use hbs to create views
app.set('view engine', 'hbs');
// link to static pages
app.use(express.static(__dirname + '/public/'));

app.get('/', (request, response) => {
  response.render('home.hbs', {
    pageTitle: "Home Page",
    welcomeMessage: "Welcome to this amazing website!",
  })
});

app.listen(port, () => {
  console.log('Server is up on port: ' + port);
});
