const express = require('express');
const app = express();

app.get('/',function (req,res){
    res.send("Server running prefectly.");
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})