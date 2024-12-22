const express = require('express');
const app = express();
// const fetch = require('node-fetch');

const axios = require('axios');

app.get('/',function(req,res){
    res.send("This is the main2")
})

app.get('/testcors',function(req,res){
    axios.get('http://localhost:3000/corstest')
    .then(()=>{
        console.log("3000 called from");
        res.send("cors implemented successfully");
    })
    .catch((err)=>{
        console.log(err,"err");
    })
})

app.listen(3010,()=>{
    console.log("Server is running on port 3010");
})