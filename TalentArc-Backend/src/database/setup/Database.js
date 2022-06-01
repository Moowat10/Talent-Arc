import Sequelize from "sequelize";
import * as Models from "../models";
import connection from "./Connection";
import relationships from "./Relationships";

const Users = Models.Users(connection, Sequelize.DataTypes);

const Posts = Models.Posts(connection, Sequelize.DataTypes);

const Auditions = Models.Auditions(connection, Sequelize.DataTypes);

const TalentedAttributes = Models.TalentedAttributes(
  connection,
  Sequelize.DataTypes
);

const SocialAttributes = Models.SocialAttributes(
  connection,
  Sequelize.DataTypes
);

const Database = {
  connection,

  Users,

  Posts,
  Auditions,
  TalentedAttributes,
  SocialAttributes,
};

relationships(Database);

export default Database;
