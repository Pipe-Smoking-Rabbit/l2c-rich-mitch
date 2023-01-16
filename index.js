const { marked } = require("marked")
const fs = require("fs/promises")

fs.readFile(`${__dirname}/Lesson.md`, "utf-8").then(content => {
    const lessonData = marked.lexer(content)
    fs.writeFile(`${__dirname}/data/lesson-data.json`, JSON.stringify(lessonData, null, 2))
})
