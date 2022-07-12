const express = require('express');
const app = express();
var path = require('path');
let date_ob = new Date();
let hours = date_ob.getHours();


app.set('view engine', 'pug');
app.set('views','./views');
const port=3000;

const myLogger = function (req, res, next) {
    if(hours<9||hours>23)
    {
        res.status(400).send('error')
    }
     next();
  }
  
  app.use(myLogger);
//Simple request time logger
app.use(express.static(path.join(__dirname, './public')));
console.log(hours);
app.get('/home', function(req, res){
    res.render('home');
 });
 app.get('/contact-us', function(req, res){
    res.render('contact-us',{
        user: {name: "Ayush", url:"http://www.tutorialspoint.com"}
     });
 });
 app.get('/our-services', function(req, res){
    res.render('our-services');
 });

app.listen(port, function(){
  console.log('The server is running, ' +
      ' please, open your browser at http://localhost:%s', 
      port);
});
  



  