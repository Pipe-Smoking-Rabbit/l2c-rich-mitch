const { marked } = require("marked")
const fs = require("fs/promises")

fs.readFile(`${__dirname}/Lesson.md`, "utf-8").then(content => {
    const lessonDataJSON = marked.lexer(content)
    fs.writeFile(`${__dirname}/db/data/lesson-data.json`, JSON.stringify(lessonDataJSON, null, 2), 'utf-8')
})