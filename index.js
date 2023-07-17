const express = require("express");
const app = express();
const path = require("path");
// morgan
// add view template engine
pp.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
// Use Express middleware to configure routing
app.get("/", (req, res) => res.send("home"));
app.listen(4000, () => {
  console.log(`Server Started at ${4000}`);
});
