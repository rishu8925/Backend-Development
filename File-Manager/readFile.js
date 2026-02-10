

const fs = require("fs");

function readFile(rl, callback) {
  rl.question("Enter file path to read: ", (filePath) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.log("Error reading file:", err.message);
      } else {
        console.log("\n--- File Content ---");
        console.log(data);
      }
      callback();
    });
  });
}

module.exports = readFile;
