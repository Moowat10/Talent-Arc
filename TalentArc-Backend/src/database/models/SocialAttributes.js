export default (connection, DataTypes) =>
  connection.define(
    "SocialAttributes",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      following: {
        type: DataTypes.ARRAY(DataTypes.STRING(150)),
        allowNull: true,
      },
      followers: {
        type: DataTypes.ARRAY(DataTypes.STRING(150)),
        allowNull: true,
      },
      directMessages: {
        type: DataTypes.ARRAY(DataTypes.STRING(100)),
        allowNull: true,
      },
      likes: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      posts: {
        type: DataTypes.ARRAY(DataTypes.STRING(100)),
        allowNull: true,
      },
      previousWork: {
        type: DataTypes.ARRAY(DataTypes.STRING(150)),
        allowNull: true,
      },
      listOfAuditions: {
        type: DataTypes.ARRAY(DataTypes.STRING(150)),
        allowNull: true,
      },
      listOfTalentedPreviouslyWorked: {
        type: DataTypes.ARRAY(DataTypes.STRING(150)),
        allowNull: true,
      },
      listOfSimpleInterviews: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: true,
      },
      listOfAdvancedInterviews: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: true,
      },
    },
    {
      connection,
      tableName: "SocialAttributes",
      timestamps: false,
    }
  );
