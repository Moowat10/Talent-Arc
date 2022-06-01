const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TalentedAttributes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    ethnicity: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "TalentedAttributes_ethnicity_key"
    },
    gender: {
      type: DataTypes.ENUM("MALE","FEMALE","OTHER"),
      allowNull: true
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BMI: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hairColor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    eyesColor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    skinColor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    talents: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    martialArts: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    musicalType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sports: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    nativeLanguage: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    secondLanguageAccent: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    prevWork: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TalentedAttributes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "TalentedAttributes_ethnicity_key",
        unique: true,
        fields: [
          { name: "ethnicity" },
        ]
      },
      {
        name: "TalentedAttributes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
