export default (connection, DataTypes) =>
  connection.define(
    "Auditions",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      UID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      auditionName: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      roleDetails: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      creationDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      videoURL: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      listOfWinningActors: {
        type: DataTypes.ARRAY,
        allowNull: true,
      },
      listOfActors: {
        type: DataTypes.ARRAY,
        allowNull: true,
      },
    },
    {
      connection,
      tableName: "Auditions",
      timestamps: true,
    }
  );
