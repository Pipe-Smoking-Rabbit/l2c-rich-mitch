const { selectLessons } = require("../models/models.controllers")

exports.getLessons = (req, res, next) => {
    selectLessons().then((lessons) => {
        res.status(200).send({lessons});
    });
};