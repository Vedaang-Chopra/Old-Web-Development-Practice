const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
let a;
app.use('/', express.static(path.join(__dirname, 'frontend')));

app.post('/todos/add', function (req, res){
    //console.log(req);
console.log(req.body.newtodo);
});


app.listen(5454,function(){
    console.log("Server started")}
    );