import Database, { DatabaseSeeds } from "../src/database";

Database.connection
  .sync({
    force: true,
    alter: false,
  })
  .then(async () => {
    await DatabaseSeeds(Database);
    console.log("done");
  })
  .catch((err) => console.error(err));
