'use strict';

const DBManager = require('..');

test('mass database manager', () => {
  let dbManager=new DBManager();
  dbManager.loadTest();
  expect(dbManager.databases.test.length).toBe(100);
});
