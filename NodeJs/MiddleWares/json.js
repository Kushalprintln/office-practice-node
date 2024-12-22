const express = require('express');
const { type } = require('os');
const app = express();

app.use(express.json());
// text/* here means the regix that what to accept and what should not.
app.use(express.text({type:"text/*"}));
// when we have to deal with form based data to post then we have to usel
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res, next) => {
    res.json([{ name: "Kushal", age: "26" }]);
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send("checking body");
})

app.listen(3000, () => {
    console.log("Server is running on port 3k.");
})