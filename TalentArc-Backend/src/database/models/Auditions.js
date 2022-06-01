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
        allowNull: false,
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
        type: DataTypes.ARRAY(DataTypes.STRING(150)),
        allowNull: true,
      },
      listOfActors: {
        type: DataTypes.ARRAY(DataTypes.STRING(150)),
        allowNull: true,
      },
    },
    {
      connection,
      tableName: "Auditions",
      timestamps: true,
    }
  );
