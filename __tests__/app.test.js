const testData = require('../db/data/lesson-data.json');
const app = require('../app');
const request = require('supertest');
const db = require('../db/connection');
const seed = require('../db/seed/seed');

afterAll(() => {
    if (db.end) return db.end();
});

beforeEach (() => seed(testData));

describe('test', () => {
    test('should ', () => {
        return request(app).get('/api/lessons').expect(200)
        .then(({body}) => {
        expect(body.lessons).toHaveLength(1);
    });
    });
});