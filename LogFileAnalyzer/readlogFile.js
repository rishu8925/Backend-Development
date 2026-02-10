

const fs = require("fs");
const readline = require("readline");

function readLogFile(filePath, callback) {
  const lines = [];

  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  rl.on("line", (line) => {
    lines.push(line);
  });

  rl.on("close", () => {
    callback(lines);
  });
}

module.exports = readLogFile;
