export default (connection, DataTypes) =>
  connection.define(
    "TalentedAttributes",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      UID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Users",
          key: "id",
        },
      },
      ethnicity: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
      gender: {
        type: DataTypes.ENUM("MALE", "FEMALE", "OTHER"),
        allowNull: true,
      },
      height: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      BMI: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      hairColor: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      eyesColor: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      skinColor: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      talents: {
        type: DataTypes.ARRAY,
        allowNull: true,
      },
      martialArts: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      musicalType: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      sports: {
        type: DataTypes.ARRAY,
        allowNull: true,
      },
      nativeLanguage: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      secondLanguageAccent: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      prevWork: {
        type: DataTypes.ARRAY,
        allowNull: true,
      },
    },
    {
      connection,
      tableName: "TalentedAttributes",
      timestamps: false,
    }
  );
