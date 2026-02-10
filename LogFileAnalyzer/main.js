

const readLogFile = require("./readLogFile");
const parseLog = require("./parseLog");
const generateReport = require("./generateReport");
const path = require("path");

const logFilePath = path.join(__dirname, "sample.log");


readLogFile(logFilePath, (lines) => {
  const stats = parseLog(lines);
  generateReport(stats);
});
