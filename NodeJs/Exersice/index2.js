const express = require("express");
const app = express();

const fs = require('fs');
const data = require('./data.json');

const fetch = require('node-fetch');

app.use(express.urlencoded({ extended: false }));

function mid1 (req,res,next){
    req.username = "Kushal.Sonkamble"
    next();
}

function mid2 (req,res,next){
    console.log(req.username)
    next();
}

app.get('/',[mid1,mid2], function (req, res) {
    res.send("this is index 3010 index2");
})

app.post('/profile', function (req, res) {
    const body = req.body;
    console.log(body);
    const newUpdateData = data.push(body);
    fs.writeFile('./data.json', JSON.stringify(newUpdateData), (err,data1) => {
        return res.json(data);
    })
    console.log(data);
})

app.get('/testcors',(req,res)=>{
    res.send("testing cors")

})

app.listen(3010, () => {
    console.log("Server is running on port 3010");
})