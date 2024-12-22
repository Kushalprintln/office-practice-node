const express = require('express');
const app = express();

// Middleware for all 
function simpleFun(req,res,next){
    console.log('I will get hit for all APIs');
    next();
}

app.use(simpleFun);

// Type 3 Middle wares

function mid1 (req,res,next){
    console.log('Mid one hit');
    next();
}
function mid2 (req,res,next){
    console.log('Mid two hit');
    next();
}
function mid3 (req,res,next){
    console.log('Mid three hit');
    next();
}

// Req and resp and next in the middle ware function are handeled by express.

app.get('/',[mid1,mid2,mid3],function(req,res){
    res.send("SERVER HITTING AFTER HITTING ALL MIDDLEWARES");
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})