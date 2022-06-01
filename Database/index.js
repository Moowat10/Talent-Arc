import { error, success } from "consola";
import database, { DummyData } from "./database";

database.connection
  .sync({ force: true })
  .then(async () => {
    await DummyData(database);

    success({
      badge: true,
      message: "Database initialized successfully",
    });
  })
  .catch((err) => {
    error({
      badge: true,
      message: err.message,
    });
  });
