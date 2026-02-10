

const fs = require("fs");

function deleteFile(rl, callback) {
  rl.question("Enter file path to delete: ", (filePath) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        console.log("Error deleting file:", err.message);
      } else {
        console.log("File deleted successfully.");
      }
      callback();
    });
  });
}

module.exports = deleteFile;
