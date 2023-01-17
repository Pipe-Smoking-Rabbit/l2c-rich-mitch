const db = require('../db/connection');

exports.selectLessons = () => {
    return db.query('SELECT lesson_name FROM lessons;')
    .then(({rows}) => {
        return rows;
    });
};

exports.selectLessonByName = (lesson_name) => {
    return db.query('SELECT * FROM lessons WHERE lesson_name = $1;', [lesson_name])
    .then(({rows}) => {
        return rows;
    });
};