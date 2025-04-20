const express = require("express");
const app = express();
app.get('/', (req,res) => {
    res.send("welcome");
})
app.listen(3000, function() {
    console.log("app lsiterning port 3000")
})