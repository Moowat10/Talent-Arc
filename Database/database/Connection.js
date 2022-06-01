import Sequelize from "sequelize";
import Config from "../config";

export default new Sequelize(
  Config.Database.Name,
  Config.Database.Username,
  Config.Database.Password,
  {
    host: Config.Database.Host,
    dialect: Config.Database.Dialect,
    port: Config.Database.Port,

    logging: true,
  }
);
