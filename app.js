const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello from Node.js!");
});

app.get("/api/hello", (req, res) => {
    res.json({
        message: "Hello World",
        status: "success"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});