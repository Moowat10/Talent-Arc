import { ApolloServer } from "apollo-server";
import { createToken, getUserFromToken } from "./auth";
import database from "./database";
import models from "./mongodb";
import typeDefs from "./typedefs";
import resolvers from "./resolvers";

/*connect()
.then(conn => console.log('Connected to MongoDB'))
.catch(err => console.log('Error in connecting to MongoDB', err))*/

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context({ req }) {
    const token = req.headers.authorization;
    const user = getUserFromToken(token);
    console.log(user);
    return { database, models, user, createToken };
  },
});
``;
server.listen(8000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
