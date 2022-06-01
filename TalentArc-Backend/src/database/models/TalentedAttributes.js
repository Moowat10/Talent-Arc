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
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      ethnicity: {
        type: DataTypes.STRING(255),
        allowNull: true,
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
        type: DataTypes.ARRAY(DataTypes.STRING(50)),
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
        type: DataTypes.ARRAY(DataTypes.STRING(50)),
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
        type: DataTypes.ARRAY(DataTypes.STRING(75)),
        allowNull: true,
      },
    },
    {
      connection,
      tableName: "TalentedAttributes",
      timestamps: false,
    }
  );
