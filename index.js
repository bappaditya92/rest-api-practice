const express = require('express');
const app = express();
const port = 5000; 

app.get('/', (req, res)=>{
    res.send('Welcome to landing page...')
})

app.get('/about',(req,res)=>{
    res.send('Welcome to about page...')
})
app.get('/login', (req,res)=>{
    res.send('<h1> Please Login Asap<h1>')
})

app.get('/contact', (req,res)=>{
    res.send('<h2> welcome to contact page<h2>')
})
app.listen(port,()=>{
    console.log(`App is Listening on ${port}`);
    
})