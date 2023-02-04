const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrl = require("./routes/routes")
const cors = require('cors');

const app = express();


dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS, () => {
    console.log('DB connected')
})

// activating bodyparsers
app.use(express.json());
//initailizing cors
app.use(cors());
// initializing app as middleware
app.use("/api", routesUrl);


// app.get("/", (req, res) => {
//     res.send("<h1>WELCOME TO SERVER</h1>")
// })



app.listen(8000, () => {
    console.log("server is up and listening on port 8000");
})