const fs = require('fs');

const inputFile = 'input.txt';
const outputFile = 'output.txt';

fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const wordCount = data.trim().split(/\s+/).length;

  fs.writeFile(outputFile, `Word Count: ${wordCount}`, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('Word count written to output.txt');
    }
  });
});
