var DataTypes = require("sequelize").DataTypes;
var _Auditions = require("./Auditions");
var _Posts = require("./Posts");
var _SocialAttributes = require("./SocialAttributes");
var _TalentedAttributes = require("./TalentedAttributes");
var _Users = require("./Users");

function initModels(sequelize) {
  var Auditions = _Auditions(sequelize, DataTypes);
  var Posts = _Posts(sequelize, DataTypes);
  var SocialAttributes = _SocialAttributes(sequelize, DataTypes);
  var TalentedAttributes = _TalentedAttributes(sequelize, DataTypes);
  var Users = _Users(sequelize, DataTypes);

  Users.belongsTo(SocialAttributes, { as: "SID_SocialAttribute", foreignKey: "SID"});
  SocialAttributes.hasMany(Users, { as: "Users", foreignKey: "SID"});
  Auditions.belongsTo(Users, { as: "UID_User", foreignKey: "UID"});
  Users.hasMany(Auditions, { as: "Auditions", foreignKey: "UID"});
  Posts.belongsTo(Users, { as: "UID_User", foreignKey: "UID"});
  Users.hasMany(Posts, { as: "Posts", foreignKey: "UID"});
  TalentedAttributes.belongsTo(Users, { as: "UID_User", foreignKey: "UID"});
  Users.hasMany(TalentedAttributes, { as: "TalentedAttributes", foreignKey: "UID"});

  return {
    Auditions,
    Posts,
    SocialAttributes,
    TalentedAttributes,
    Users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
