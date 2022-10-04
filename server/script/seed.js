'use strict';

const {
  db,
  models: { User },
} = require('../db/');


async function seed() {
  await db.sync({ force: true });

  // If wanting to create dummy data
  // await Promise.all(
  //   users.map((user) => {
  //     return User.create(user);
  //   })
  // );

  console.log('db synced!');
  console.log(`seeded successfully`);
}

async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;