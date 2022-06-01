import Sequelize from "sequelize";

export default new Sequelize("postgres", "postgres", "12345", {
  dialect: "postgres",
  host: "127.0.0.1",
  port: 5432,

  logging: true,
});
