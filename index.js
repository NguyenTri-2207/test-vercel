const express = require("express");
const app = express();

// morgan
// add view template engine
app.set("view engine", "pug");
// Use Express middleware to configure routing
app.get("/", (req, res) => res.render("home"));
app.listen(4000, () => {
  console.log(`Server Started at ${4000}`);
});
