import express from "express";

import userRoute from "../router/userRoute.js";

import registerRoute from "../router/registerRoute.js";

import dashboardRoute from "../router/DashboardRoute.js";


const port=3000;
const app=express();

app.use("/api",userRoute)
app.use("/api",registerRoute)
app.use("/api/dashboard",dashboardRoute)

app.listen(port,()=>{
    console.log("server is running on port "+port);
});