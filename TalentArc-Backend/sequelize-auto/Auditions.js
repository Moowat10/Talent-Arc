const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Auditions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    auditionName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    roleDetails: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    creationDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    videoURL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    listOfWinningActors: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    listOfActors: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Auditions',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Auditions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
