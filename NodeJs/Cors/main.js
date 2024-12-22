const express = require('express');
const app = express();
const cors = require('cors');


const whiteListServer = ["https://www.youtube.coms"];
const corsOption = {
    origin : (domain,callback)=>{
        console.log(domain);    
        if(whiteListServer.includes(domain)){
            callback(null, true);
        }else{
            callback(new Error("You are not allowed to access my resources"),false);
        }
    }
}

app.use(cors(corsOption));

app.get('/', function (req, res) {
    console.log("receving req on 3000");
    res.send("This is the main")
})

app.get('/corstest', function (req, res) {
    console.log("receiving req on 3000/corstest from 3010");
    res.send("Testing cors errors")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})