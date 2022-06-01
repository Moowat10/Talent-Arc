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
        type: DataTypes.ARRAY,
        allowNull: false,
      },
      followers: {
        type: DataTypes.ARRAY,
        allowNull: true,
        unique: true,
      },
      directMessages: {
        type: DataTypes.ENUM("TALENTED", "AGENCY", "NORMAL"),
        allowNull: false,
        defaultValue: "NORMAL",
      },
      Likes: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      posts: {
        type: DataTypes.ARRAY,
        allowNull: true,
      },
    },
    {
      connection,
      tableName: "SocialAttributes",
      timestamps: false,
    }
  );
