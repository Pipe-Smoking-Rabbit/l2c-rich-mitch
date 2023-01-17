const seed = require('./seed');
const db = require('../connection');
const { marked } = require("marked");
const fs = require("fs");

const data = fs.readFileSync(`${__dirname}/../../Lesson.md`, "utf-8");
const tokens = marked.lexer(data);

const runSeed = () => {
  return seed(JSON.stringify(tokens)).then(() => db.end());
};

runSeed();