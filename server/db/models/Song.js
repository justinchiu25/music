const { Sequelize } = require("sequelize");
const db = require("../db");

const Song = db.define("song", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
  },
  artist: {
    type: Sequelize.TEXT,
  },
  image: {
    type: Sequelize.STRING,
  }
});

module.exports = Song;