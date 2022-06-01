const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SocialAttributes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    following: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    followers: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      unique: "SocialAttributes_followers_key"
    },
    directMessages: {
      type: DataTypes.ENUM("TALENTED","AGENCY","NORMAL"),
      allowNull: false,
      defaultValue: "NORMAL"
    },
    Likes: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    posts: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true
    },
    listOfAuditions: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SocialAttributes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "SocialAttributes_followers_key",
        unique: true,
        fields: [
          { name: "followers" },
        ]
      },
      {
        name: "SocialAttributes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
