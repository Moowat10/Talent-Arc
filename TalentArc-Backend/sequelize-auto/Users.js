const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "Users",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: "Users_email_key",
      },
      fullName: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      mobile: {
        type: DataTypes.STRING(50),
        allowNull: true,
        unique: "Users_mobile_key",
      },
      userType: {
        type: DataTypes.ENUM("TALENTED", "AGENCY", "NORMAL"),
        allowNull: false,
        defaultValue: "NORMAL",
      },
      SID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "SocialAttributes",
          key: "id",
        },
      },
      address: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      DOB: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      profileURL: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      coverURL: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      bio: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      facebookURL: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      googleURL: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      instaURL: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      tiktokURL: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      youtubeURL: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      nationality: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      countryOfResidence: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      cityOfResidence: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      geoLocation: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "Users",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "Users_email_key",
          unique: true,
          fields: [{ name: "email" }],
        },
        {
          name: "Users_mobile_key",
          unique: true,
          fields: [{ name: "mobile" }],
        },
        {
          name: "Users_pkey",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
