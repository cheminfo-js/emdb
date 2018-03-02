
const DBManager = require('..');

test('mass database manager', () => {
  let dbManager = new DBManager();
  dbManager.loadTest();
  expect(dbManager.databases.test).toHaveLength(100);
});
