const devData = require('../data/lesson-data.json');
const seed = require('./seed');
const db = require('../connection');

const runSeed = () => {
  return seed(devData).then(() => db.end());
};

runSeed();