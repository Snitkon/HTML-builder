const path = require("path");
const fs = require("fs");
const process = require("process");
const stream = fs.createWriteStream(path.join(__dirname, "text.txt"), 'utf-8');
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

process.on("SIGINT", () => process.exit());
process.on("exit", () => process.stdout.write("Хорошего дня!\n"));

process.stdout.write("Введите текст:\n");
process.stdin.on("data", (data) => {
  if (data.toString().trim() === "exit") process.exit();
  stream.write(data);
});