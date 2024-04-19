import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";

const app = express();

const PORT: number = parseInt(process.env.PORT as string, 10) || 4000;

const startServer = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/taskify", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected!");

    app.listen(PORT, () => {
      console.log(`Server started on ${PORT}...`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
