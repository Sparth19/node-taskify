import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

const PORT: number = parseInt(process.env.PORT as string, 10);

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING as string, {})
  .then(({ connection }) => {
    console.log("MongoDB connected!", connection.host);
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

let apolloServer: ApolloServer | null = null;

const startServer = async () => {
  try {
    apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to Taskify.");
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}...`);
  if (apolloServer) {
    console.log(`GraphQL server ready at ${apolloServer.graphqlPath}`);
  } else {
    console.error("Apollo Server not initialized.");
  }
});
