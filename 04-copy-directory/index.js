const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "files");
const directoryCopyPath = path.join(__dirname, "files-copy");

fs.readdir(directoryPath, { withFileTypes: true }, (e, files) => {
  files.forEach((file) => {
    if (file.isFile()) {
      fs.copyFile(path.join(directoryPath, file.name), path.join(directoryCopyPath, file.name), (e) => {
        if (e) {
          return console.error(e);
        }
      });
    }
  });
});
fs.mkdir(directoryCopyPath, { recursive: true }, (e) => {
  if (e) {
    return console.error(e);
  }
  console.log("Folder created, well done!");
});