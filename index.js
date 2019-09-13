import express from "express";
import path from "path";
import championsRoute from "./server/routes/champions-route";
import config from "./server/config/config.dev";
import connectToDb from "./server/db/connect";

const port = config.serverPort;

connectToDb();

const app = express();

app.use(express.static(path.join(__dirname, "client/dist")));

// Set champions route
app.use("/api/champions", championsRoute);

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

app.listen(port, () =>
  console.log(`Application started successfully! : ${port}`)
);
