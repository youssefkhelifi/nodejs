const express = require('express');
const app = express();
var path = require('path');
let date_ob = new Date();
let hours = date_ob.getHours();
let day=date_ob.getDay();

app.set('view engine', 'pug');
app.set('views','./views');
const port=9000;

const myLogger = function (req, res, next) {
    if(hours<9||hours>23||day.toString()==='Sunday'||day.toString()==='Saturday')
    {
        res.status(400).send('error')
    }
     next();
  }
  
  app.use(myLogger);


//Simple request time logger
app.use(express.static(path.join(__dirname, './public')));
//console.log(hours);
app.get('/home', function(req, res){
    res.render('home');
 });
 app.get('/contact-us', function(req, res){
    res.render('contact-us',{
       
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
  



  