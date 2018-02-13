//npm is a package creation software
// Creating A server
const express=require('express');
const path=require('path')
const app=express();
app.get('/'/*Path Where http is sent*/,(req,res)=>{
    console.info('yay we got a request');
    res.send('<h1>"HELLO WORLD"</h1><button><a href="/showform">Click Here</a></button>');

})
app.get('/showform',(req,res)=>{
    res.sendFile((path.join(__dirname,'files','form.html')))
})
app.get('/showform/greet',(req,res)=>{
    res.send(`Hello ${req.query.username}`)
})
app.listen(2345/*Port no >1000*/,/*Optional callback Server function*/()=>{
    console.info("Server has Started on http://localhost//2345/");
})