const fs = require("fs");


// Read file
function readFile(filePath) {
  const data = fs.readFileSync(filePath, "utf8");
  console.log("File content:");
  console.log(data);
}

// Write file
function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, "utf8");
  console.log("File written successfully");
}



// Append file
function appendFile(filePath, content) {
  fs.appendFileSync(filePath, content, "utf8");
  console.log("Data appended successfully");
}

// Delete file
// function deleteFile(filePath) {
//   if (fs.existsSync(filePath)) {
//     fs.unlinkSync(filePath);
//     console.log("File deleted successfully");
//   } else {
//     console.log("File does not exist");
//   }
// }

module.exports = {
  writeFile,
  readFile,
  appendFile,
//   deleteFile
};
