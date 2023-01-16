const db = require('../db/connection');

exports.selectLessons = () => {
    return db.query('SELECT lesson_name FROM lessons;')
    .then(({rows}) => {
        return rows;
    });
};