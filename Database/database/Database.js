import Sequelize from "sequelize";
import * as Models from "../models";
import connection from "./Connection";

const Database = {connection};

for (const Model in Models) {
  Database[Model] = Models[Model](connection, Sequelize.DataTypes);
}

export default Database;
