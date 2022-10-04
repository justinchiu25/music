const db = require('./db');
const User = require('./models/User');
const Song = require('./models/Song');

//associations could go here!

//Ride.belongsTo(User, { as: "driver" })
//Ride.belongsTo(User, { as: "rider" })


module.exports = {
  db,
  models: {
    User,
    Song
  },
}
