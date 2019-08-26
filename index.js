const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "client/dist")));

// Set champions route
app.use("/api/champions", require("./server/routes/champions-route"));

// Handles not found endpoints
app.get("/api/*", (req, res) => {
  res.send({
    message: "Endpoint not found",
    type: "error"
  });
});

// Start angular
app.get("*", (req, res) => {
  console.log(req.url);
  res.sendFile(path.join(__dirname, "client/dist/index.html"));
});

app.listen(3000, () => console.log("Application started successfully!"));
