require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
let PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("<h1>Enjoy the journey with our cars</h1>")
})

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Listening at http://localhost:${PORT}`)
});
