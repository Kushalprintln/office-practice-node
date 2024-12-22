const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://kushsonkamble:wFQCs560TduNa3xc@cluster0.uhxkg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB Error", err);
  });

const Users = require("./Users/userModal");

app.use(express.urlencoded({ extended: false }));

// async function insert(){
//     await Users.create({
//         name:"Kushal Sonkamble",
//         email:"kushsonkamble@gmail.com"
//     })
// }

// insert();

app.get("/", async function (req, res) {
  const sendusers = await Users.find({});
  res.send(sendusers);
});

app.post("/users", async (req, res) => {
  const body = req.body;
  await Users.create({
    name: body.name,
    email: body.email,
  });
  return res.status(201).send("User Created Successfully");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
