const express = require('express');  
const app = express();
const PORT = 8080;
var path = require('path');
var bodyParser = require('body-parser');  
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 

app.set('view engine', 'ejs'); 

app.use( express.json() )
app.use(express.static('public'));

app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})
app.get('/user', function(req, res){
    
    res.render('home');
 })
 
 app.get('/', (req, res) => {
    res.render('home')
  });

app.post('/process_post', urlencodedParser, function (req, res) {  
     
   response = {  
       charname:req.body.charname,  
       game:req.body.game,
       spcl:req.body.spcl,
       nrml:req.body.nrml,
       fspc:req.body.fspc,
       sspc:req.body.sspc,
       fnrm:req.body.fnrm,
       snrm:req.body.snrm  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
}) 
 
var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("We are live at http://%s:%s", host, port)  
})  