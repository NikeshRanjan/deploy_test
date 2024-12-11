const express = require('express');

const app = express();

app.use(express.json());

app.get("/", (req, res) =>{
    res.status(200).json({"message": "Server running"});
})
console.log("Hello-World!");
app.listen("3000", () =>{
    console.log("server runs on port 3000....");
})