

const fs = require("fs");

function listDirectory(rl, callback) {
  rl.question("Enter directory path: ", (dirPath) => {
    fs.readdir(dirPath, (err, files) => {
      if (err) {
        console.log("Error reading directory:", err.message);
      } else {
        console.log("\n--- Directory Contents ---");
        files.forEach((file) => {
          console.log(file);
        });
      }
      callback();
    });
  });
}

module.exports = listDirectory;
