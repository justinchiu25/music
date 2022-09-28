require("dotenv").config();
const express = require("express");

const app = express();

app.use("/api", require("./api"));

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("Server is up and listening on port:", port)
})