import express from "express";
import session from "express-session";

const app = express();
app.use(
  session({
    secret: "my-secret-key",   
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000,//1 hour
    }
  })
);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/login", (req, res) => {
  req.session.user = {
    name: "Lavanya",
    role: "admin"
  };
  res.send("User logged in & session created");
});
app.get("/profile", (req, res) => {
  if (req.session.user) {
    res.send(`Welcome ${req.session.user.name}`);
  } else {
    res.send("No session found, please login");
  }
});
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if(err){
        return res.status(500).send("could not logout");
    }
    res.send(" user Logged out ");
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});