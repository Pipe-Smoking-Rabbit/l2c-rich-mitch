const { selectLessons, selectLessonByName } = require("../models/models.controllers")

exports.getLessons = (req, res, next) => {
    selectLessons().then((lessons) => {
        res.status(200).send({lessons});
    });
};

exports.getLessonByName = (req, res, next) => {
    const {lesson_name} = req.params;
    selectLessonByName(lesson_name).then((lesson) => {
        res.status(200).send({lesson});
    });
};