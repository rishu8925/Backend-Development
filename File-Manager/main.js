

const readline = require("readline");

const readFile = require("./readFile");
const writeFile = require("./writeFile");
const copyFile = require("./copyFile");
const deleteFile = require("./deleteFile");
const listDirectory = require("./listDirectory");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log("\nFile Manager Application");
  console.log("1. Read a file");
  console.log("2. Write to a file");
  console.log("3. Copy a file");
  console.log("4. Delete a file");
  console.log("5. List directory contents");
  console.log("6. Exit");

  rl.question("Enter your choice: ", handleChoice);
}

function handleChoice(choice) {
  switch (choice) {
    case "1":
      readFile(rl, showMenu);
      break;
    case "2":
      writeFile(rl, showMenu);
      break;
    case "3":
      copyFile(rl, showMenu);
      break;
    case "4":
      deleteFile(rl, showMenu);
      break;
    case "5":
      listDirectory(rl, showMenu);
      break;
    case "6":
      console.log("Exiting application...");
      rl.close();
      break;
    default:
      console.log("Invalid choice!");
      showMenu();
  }
}

showMenu();
