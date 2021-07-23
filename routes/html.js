var express = require("express");
var HTMLrouter = express.Router();

// Home page route
router.get("/notes", function (req, res) {
  res.send(path.join(__dirname, "./public/notes.html"));
});

// Wildcard page route!!
router.get("/*", function (req, res) {
  res.send(path.join(__dirname, "./public/notes.html"));
});

module.exports = HTMLrouter;

//starter code from mozilla TODO: check if it works!!
