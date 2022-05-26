const fs = require("fs");
const path = require("path");

fs.readdir(path.join(__dirname, "secret-folder"), { withFileTypes: true }, (e, files) => {
  if (e) console.log(e);
  else {
    console.log("File names of the directory: ");
    files.forEach((file) => {
      fs.stat(path.join(__dirname, "secret-folder", file.name), (e, stats) => {
        if (stats.isFile()) {
          const name = path.basename(file.name, path.extname(file.name));
          const ext = path.extname(file.name).substring(1, path.extname(file.name).length);
          const size = stats.size / 1024;
          console.log(`${name} - ${ext} - ${size}kb`);
        }
      });
    });
  }
});
