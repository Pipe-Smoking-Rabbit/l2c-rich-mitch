const express = require('express');
const { getLessons, getLessonByName } = require('./controllers/lessons.controllers');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/api/lessons', getLessons);

app.get('/api/lessons/:lesson_name', getLessonByName);

module.exports = app;