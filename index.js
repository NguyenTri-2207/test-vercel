const express = require("express");
const app = express();

// morgan

// Use Express middleware to configure routing
app.get("/", (req, res) => res.send("home"));
app.listen(4000, () => {
  console.log(`Server Started at ${4000}`);
});
