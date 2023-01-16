const lessonData = require("../data/lesson-data.json");
const db = require("../connection");

async function seed(data) {
    await db.query(`
        DROP TABLE IF EXISTS lessons;
    `)
    await db.query(`
        CREATE TABLE lessons(
        lesson_id SERIAL PRIMARY KEY,
        lesson_name VARCHAR NOT NULL,
        lesson_content VARCHAR
        );`)
    await db.query(`
        INSERT INTO lessons
        (lesson_name, lesson_content)
        VALUES
        ('for_loops', $1);
        `, [data])
};

module.exports = seed;