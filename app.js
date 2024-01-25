const express = require('express')
const app = express()
const port = process.env.PORT || 5500;
//set view engine
let path = require('path');
app.set('view engine', 'ejs');

app.get('/app', function (req, res) {
  res.send('Hi!, I\'m a type 8w1. One strength of 8\'s is their self confidence. One weakness is their self reliance.')
})

app.get('/enneagram', function (req, res) {
    res.sendFile(__dirname + '/jtenn.html')
  })


  app.get('/', function(req, res) {
    res.render('index');
  });
  
  // about page
  app.get('/send', function(req, res) {
    res.render('pages/about');
  });

//app.listen(3000)

app.listen(port, () => {
  console.log(`mike app listening on port ${port}`)
})