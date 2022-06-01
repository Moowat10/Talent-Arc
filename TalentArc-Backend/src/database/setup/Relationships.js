export default ({
  Users,
  Posts,
  Auditions,
  TalentedAttributes,
  SocialAttributes,
}) => {
  // * Auto Generator Command  -->  npx sequelize-auto -h [Host] -d [Database] -u [Username] -x [Password] -p 5432 --dialect [Dialect] -o ./sequelize-auto
  Users.belongsTo(SocialAttributes, {
    as: "SID_SocialAttribute",
    foreignKey: "SID",
  });
  SocialAttributes.hasMany(Users, { as: "Users", foreignKey: "SID" });
  Auditions.belongsTo(Users, { as: "UID_User", foreignKey: "UID" });
  Users.hasMany(Auditions, { as: "Auditions", foreignKey: "UID" });
  Posts.belongsTo(Users, { as: "UID_User", foreignKey: "UID" });
  Users.hasMany(Posts, { as: "Posts", foreignKey: "UID" });
  TalentedAttributes.belongsTo(Users, { as: "UID_User", foreignKey: "UID" });
  Users.hasMany(TalentedAttributes, {
    as: "TalentedAttributes",
    foreignKey: "UID",
  });
};
