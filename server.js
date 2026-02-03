const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


app.get("/users", (req, res) => {
  const users = ["Ram", "Shyam", "Mohan", "Sita"];
  const name = req.query.name;

  const result = name ? users.filter(u => u.includes(name)) : users;

  res.send(result);
});
