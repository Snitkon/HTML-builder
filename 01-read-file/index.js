const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, 'text.txt');

const readStream = fs.createReadStream(file);
readStream.on('data', chunk => console.log(chunk.toString()));