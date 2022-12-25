require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRouter = require('./src/routes/routes')
const connectDB = require("./src/config/db");
let PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/',userRouter)

app.get("/", (req, res) => {
    res.send(`<div><p>HI</p></div>`)
})

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Listening at http://localhost:${PORT}`)
});
