

function parseLog(lines) {
  let errorCount = 0;
  let warningCount = 0;
  let infoCount = 0;

  lines.forEach((line) => {
    if (line.startsWith("ERROR")) {
      errorCount++;
    } else if (line.startsWith("WARNING")) {
      warningCount++;
    } else if (line.startsWith("INFO")) {
      infoCount++;
    }
  });

  return {
    totalLines: lines.length,
    errors: errorCount,
    warnings: warningCount,
    infos: infoCount
  };
}

module.exports = parseLog;
