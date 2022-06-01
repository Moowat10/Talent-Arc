const { ApolloServer, UserInputError } = require("apollo-server");
const typeDefs = require("./typedefs");
const resolvers = require("./resolvers");
const { createToken, getUserFromToken } = require("./auth");

/*connect()
.then(conn => console.log('Connected to MongoDB'))
.catch(err => console.log('Error in connecting to MongoDB', err))*/
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { UserInputError },
});

server.listen(8000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
