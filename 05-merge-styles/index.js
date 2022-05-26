const fs = require("fs");
const path = require("path");
const wStream = fs.createWriteStream(path.join(__dirname, "project-dist", "bundle.css"));

fs.readdir(path.join(__dirname, "styles"), { withFileTypes: true }, (e, files) => {
  if (e) {
    console.log(e);
  } else {
    files.forEach((file) => {
      if (file.isFile() && path.extname(file.name) === ".css") {
        let body = "";
        wStream.write(`${body}`);
        const rStream = fs.createReadStream(path.join(__dirname, "styles", file.name), "utf-8");
        rStream.on("data", (chunk) => {
          body = chunk.toString();
          wStream.write(`${body}`);
        });
      }
    });
  }
});
