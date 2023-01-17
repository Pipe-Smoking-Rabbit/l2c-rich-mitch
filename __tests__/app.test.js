const testData = require('../db/data/lesson-data.json');
const app = require('../app');
const request = require('supertest');
const db = require('../db/connection');
const seed = require('../db/seed/seed');

afterAll(() => {
    if (db.end) return db.end();
});

beforeEach (() => seed(testData));

describe('/api/lessons', () => {
    describe('GET', () => {
        test('status: 200 returns a list of all lesson names', () => {
            return request(app).get('/api/lessons').expect(200)
            .then(({body}) => {
                expect(body.lessons).toHaveLength(1);
                body.lessons.map((lesson) => {
                    expect(lesson).toMatchObject({lesson_name: expect.any(String)});
                });
            });
        });
    });
});

describe('/api/lessons/:lesson_name', () => {
    describe('GET', () => {
        test('status: 200 returns full details of a single lesson', () => {
            return request(app).get('/api/lessons/for_loops').expect(200)
            .then(({body}) => {
                expect(body.lesson).toHaveLength(1)
                body.lesson.map((lesson) => {
                    expect(lesson).toMatchObject({
                        lesson_id: expect.any(Number),
                        lesson_name: 'for_loops',
                        lesson_content: expect.any(String)
                    });
                })
            })
        });
    });
});