const express = require('express');
const app = express();
const port = 5000; 

app.get('/', (req, res)=>{
    res.send('Welcome to landing page...')
})

app.get('/about',(req,res)=>{
    res.send('Welcome to about page...')
})
app.listen(port,()=>{
    console.log(`App is Listening on ${port}`);
    
})