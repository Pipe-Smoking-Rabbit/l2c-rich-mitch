const seed = require('./seed');
const db = require('../connection');
const { marked } = require("marked");
const fs = require("fs");

const data = fs.readFileSync(`${__dirname}/../../Lesson.md`, "utf-8");
const tokens = marked.lexer(data);
const stringTokens = JSON.stringify(tokens);

const runSeed = () => {
  return seed(stringTokens).then(() => db.end());
};

runSeed();