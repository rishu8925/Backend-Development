const express = require("express");
const logger = require("./middlewares/logger");
const methodOverride = require("method-override");



const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "log.txt");

const originalConsoleLog = console.log;

console.log = function (message) {
  originalConsoleLog(message);

  fs.appendFile(logFile, message + "\n", (err) => {
    if (err) {
      originalConsoleLog("Error writing to log file:", err);
    }
  });
};






const app = express();

// View Engine
app.set("view engine", "ejs");

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(logger);

// Routes
const employeeRoutes = require("./routes/employeeRoutes");
app.use("/", employeeRoutes);

// Error Middleware 
const errorHandler = require("./middlewares/errorMiddleware");
app.use(errorHandler);

// Server
app.listen(5000, () => console.log("Server Running on http://localhost:5000"));