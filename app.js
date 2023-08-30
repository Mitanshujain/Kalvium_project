const express = require('express');
const mongoose = require("mongoose");
const rootPath = require('./route/root')
const claculatorPath = require('./route/calculator')
const app = express();
const port = 3000;
app.use(rootPath)
app.use(claculatorPath)

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://mitanshujain1606:Kakalukiy@18@cluster0.dwcbwt1.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log("connection successful");
}).catch((e) => {
    console.log(e);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});