import { ApolloServer } from "apollo-server-express";
import { PubSub } from "graphql-subscriptions";
import express from "express";
import { createServer } from "http";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { createToken, getUserFromToken } from "./auth";
import database from "./database";
import models from "./mongodb";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

/*connect()
.then(conn => console.log('Connected to MongoDB'))
.catch(err => console.log('Error in connecting to MongoDB', err))*/
const pubsub = new PubSub();

const app = express();

const httpServer = createServer(app);

const schema = makeExecutableSchema({ typeDefs, resolvers });

// Creating the WebSocket server
const wsServer = new WebSocketServer({
  // This is the `httpServer` we created in a previous step.
  server: httpServer,
  // Pass a different path here if your ApolloServer serves at
  // a different path.
  path: "/graphql",
});

// Hand in the schema we just created and have the
// WebSocketServer start listening.
const serverCleanup = useServer({ schema }, wsServer);

const server = new ApolloServer({
  schema,
  csrfPrevention: true,
  cors: {
    origin: [
      "http://localhost:4000/graphql",
      "https://studio.apollographql.com",
    ],
  },
  plugins: [
    // Proper shutdown for the HTTP server.
    ApolloServerPluginDrainHttpServer({ httpServer }),

    // Proper shutdown for the WebSocket server.
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
  context({ req }) {
    console.log(req.headers);
    const token = req.headers.authorization;
    const user = getUserFromToken(token);
    return { database, models, pubsub, user, createToken };
  },
});
const main = async () => {
  await server.start();
  const corsOptions = {
    origin: [
      "http://localhost:4000/graphql",
      "https://studio.apollographql.com",
    ],
  };
  server.applyMiddleware({ app, cors: corsOptions, path: "/graphql" });

  const PORT = 4000;
  // Now that our HTTP server is fully set up, we can listen to it.
  httpServer.listen(PORT, () => {
    console.log(
      `Server is now running on http://localhost:${PORT}${server.graphqlPath}`
    );
  });
};
main();
