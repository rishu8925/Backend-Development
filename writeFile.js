

const fs = require("fs");

function writeFile(rl, callback) {
  rl.question("Enter file path to write: ", (filePath) => {
    rl.question("Enter content to write: ", (content) => {
      fs.writeFile(filePath, content, (err) => {
        if (err) {
          console.log("Error writing file:", err.message);
        } else {
          console.log("File written successfully.");
        }
        callback();
      });
    });
  });
}

module.exports = writeFile;
