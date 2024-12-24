const express = require("express");
const path = require("path");
const expressHandlebars = require("express-handlebars")
//const morgan = require("morgan");
const app = express();
const port = 3000;


// Use static folder
app.use(express.static(path.join(__dirname, 'public')));


// HTTP Logger
//app.use(morgan("combined"));

// Template engine
app.engine("hbs", expressHandlebars.engine({
  extname: '.hbs'
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  console.log(req.query.q);
  res.render("search");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
