

const fs = require("fs");

function copyFile(rl, callback) {
  rl.question("Enter source file path: ", (source) => {
    rl.question("Enter destination file path: ", (destination) => {
      fs.copyFile(source, destination, (err) => {
        if (err) {
          console.log("Error copying file:", err.message);
        } else {
          console.log("File copied successfully.");
        }
        callback();
      });
    });
  });
}

module.exports = copyFile;
