const functions = require("./functions");

const filePath = "test.txt";

// Write
functions.writeFile(filePath, "Hello World!\n");

// Append
functions.appendFile(filePath, "This is appended text.\n");

// Read
functions.readFile(filePath);


// Delete
// functions.deleteFile(filePath);
