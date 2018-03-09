
const DBManager = require('..');

test('mass database manager', () => {
  let dbManager = new DBManager();
  dbManager.loadTest();
  expect(dbManager.databases.test).toHaveLength(100);
});

test('mass database utils', () => {
  let Util = DBManager.Util;
  expect(Util).toHaveProperty('MF');
  expect(Util).toHaveProperty('IsotopicDistribution');
});
