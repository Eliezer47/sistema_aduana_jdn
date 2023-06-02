const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test",
});

app.get("/", (req, res) => {
  const sqlInsert = "INSERT INTO test.testdata ( Nombre, Apellido) VALUES ('Eliezer', 'Ponce');"
  db.query(sqlInsert, (err, result) => {
    res.send("Informacion enviada correctamente");
  })
});

app.listen(3001, () => {
  console.log("Servidor en puerto 3001");
});
