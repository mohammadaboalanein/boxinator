const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// change to your information connection
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "hamod930720",
  database: "Boxinator",
  connectionLimit: 50,
  queueLimit: 0,
  waitForConnection: true
});
mysql.createPool(db);

app.post("/addbox", (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const weight = req.body.weight;
    const color = req.body.color;
    const country = req.body.country;

  db.query(
    "INSERT INTO box (name, weight, color, country) VALUES (?,?,?,?)",
    [name, weight, color, country],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/getboxes", (req, res) => {
  db.query("SELECT * FROM box", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Has sended");
      console.log(result);
      res.send(result);
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM box WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/getbox", (req, res) => {
  const id = req.params.id;
  db.query("SELECT FROM box WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});