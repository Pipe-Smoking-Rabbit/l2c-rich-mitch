const lessonData = require("../data/lesson-data.json")
const db = require("../connection")

async function seed(data) {
    await db.query(`
        DROP TABLE IF EXISTS lessons;
    `)
    await db.query(`
        CREATE TABLE lessons 
        (lesson_id SERIAL PRIMARY KEY,
        lesson_name VARCHAR NOT NULL,
        lesson_content JSON,
        UNIQUE(lesson_name)
        )
    `)
};

seed(lessonData);