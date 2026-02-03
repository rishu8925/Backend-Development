import express from "express";
const app = express();


app.use((req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const time = Date.now() - start;
    console.log("Time:", time, "ms");
  });

  next();
});

app.set("view engine", "ejs");


app.listen(3000, () => {
  console.log("Server running on port 3000");
});


app.get("/users", (req, res) => {
  const users = ["Ram", "Shyam", "Mohan", "Sita"];
  const name = req.query.name;

  const result = name ? users.filter(u => u.includes(name)) : users;

  res.send(result);
});


app.get("/contact", (req,res)=>{
  res.render("contact");
});

app.post("/contact", (req,res)=>{
  console.log(req.body);
  res.send("Form Submitted");
});
app.use((req,res)=>{
  res.status(404).render("404");
});


let posts = [
  {id:1,title:"First Post",content:"Hello"},
  {id:2,title:"Second Post",content:"Learning"}
];

app.get("/blog",(req,res)=>{
  res.render("blog",{posts});
});

app.get("/blog/:id",(req,res)=>{
  const post = posts.find(p=>p.id==req.params.id);
  res.render("post",{post});
});

app.get("/blog/new",(req,res)=>{
  res.render("newpost");
});

app.post("/blog/new",(req,res)=>{
  posts.push({
    id: posts.length+1,
    title:req.body.title,
    content:req.body.content
  });
  res.redirect("/blog");
});
