export default (connection, DataTypes) =>
  connection.define(
    "Users",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(256),
        allowNull: false,
      },
      fullName: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      mobile: {
        type: DataTypes.STRING(50),
        allowNull: true,
        unique: true,
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
      connection,
      tableName: "Users",
      timestamps: true,
    }
  );
