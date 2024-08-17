const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("lojalibbs", "root", "18042006", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
