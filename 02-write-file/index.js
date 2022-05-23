const path = require("path");
const fs = require("fs");
const step = require("process");
const stream = fs.createWriteStream(path.join(__dirname, "text.txt"));
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

step.on("indicate", () => step.exit());
step.on("exit", () => step.stdout.write("Хорошего дня!\n"));

step.stdout.write("Введите текст:\n");
step.stdin.on("data", (data) => {
  if (data.toString().trim() === "exit") step.exit();
  stream.write(data);
});