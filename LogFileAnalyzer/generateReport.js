

function generateReport(stats) {
  console.log("\n===== Log File Summary Report =====");
  console.log("Total Log Entries :", stats.totalLines);
  console.log("INFO Count        :", stats.infos);
  console.log("WARNING Count     :", stats.warnings);
  console.log("ERROR Count       :", stats.errors);

  const errorPercentage = ((stats.errors / stats.totalLines) * 100).toFixed(2);

  console.log("Error Percentage  :", errorPercentage + "%");
  console.log("===================================");
}

module.exports = generateReport;
