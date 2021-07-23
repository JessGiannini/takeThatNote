const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//CHANGED TO ROUTE.GET IN ROUTES FOLDER
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "db/db.json"));
});

app.post("/api/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "db/db.json"), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    var dataArr = JSON.parse(data);
    //console.log("req.body", req.body);
    //console.log("dataArr---11", dataArr);
    dataArr.push(req.body);
    //console.log("dataArr---22", dataArr);

    fs.writeFile(
      path.join(__dirname, "db/db.json"),
      JSON.stringify(dataArr),
      (err) => {
        if (err) {
          // console.error("heheheheheh", err);
          return;
        } else {
          // console.log("writeFile good!!!!");
        }
      }
    );
  });
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
