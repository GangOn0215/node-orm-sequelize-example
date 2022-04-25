const express = require("express");
const { sequelize } = require("./database/models/index");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require("./router/index");

sequelize.sync().then(() => console.log("connected database"));

app.listen(port, () => {
  console.log(`server is on ${port}`);
});

app.get("/", (req, res) => {
  res.send("hi friend");
});

app.use(router);
